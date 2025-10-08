<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import maplibregl from "maplibre-gl";
import type { FeatureCollection, Polygon, GeoJsonProperties } from "geojson";

const mapContainer = ref<HTMLDivElement | null>(null);
let map: maplibregl.Map;
let popup: maplibregl.Popup | null = null;

const showSidebar = ref(false);
const sidebarData = ref<{ numero:number,name: string; estado: string,financiamiento:boolean,precio:number,metros:number } | null>(null);

onMounted(() => {
  if (!mapContainer.value) return;

  map = new maplibregl.Map({
    container: mapContainer.value,
    style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json", 
    center: [-68.078, -16.568], 
    zoom: 16,
  });

  map.on("load", () => {
    const planimetria: FeatureCollection<Polygon, GeoJsonProperties> = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {numero:1, name: "Lote Disponible", estado: "disponible",financiamiento:true,precio:28.000,metros:250 },
          geometry: {
            type: "Polygon",
            coordinates: [[
              [-68.080, -16.568],
              [-68.0795, -16.568],
              [-68.0795, -16.5685],
              [-68.080, -16.5685],
              [-68.080, -16.568]
            ]],
          },
        },
        {
          type: "Feature",
          properties: {numero:2, name: "Lote a Crédito", estado: "credito",financiamiento:false,precio:32.000,metros:350 },
          geometry: {
            type: "Polygon",
            coordinates: [[
              [-68.0805, -16.568],
              [-68.080, -16.568],
              [-68.080, -16.5685],
              [-68.0805, -16.5685],
              [-68.0805, -16.568]
            ]],
          },
        },
        {
          type: "Feature",
          properties: {numero:3, name: "Lote Ocupado", estado: "ocupado",financiamiento:false,precio:29.500,metros:280 },
          geometry: {
            type: "Polygon",
            coordinates: [[
              [-68.081, -16.568],
              [-68.0805, -16.568],
              [-68.0805, -16.5685],
              [-68.081, -16.5685],
              [-68.081, -16.568]
            ]],
          },
        },
      ],
    };

    map.addSource("planimetria", {
      type: "geojson",
      data: planimetria,
    });

    map.addLayer({
      id: "lotes",
      type: "fill",
      source: "planimetria",
      paint: {
        "fill-color": [
          "match",
          ["get", "estado"],
          "disponible", "#22c55e", // verde
          "credito", "#eab308",   // amarillo
          "ocupado", "#dc2626",   // rojo
          "#cccccc" // por defecto
        ],
        "fill-opacity": 0.4,
      },
    });

    map.addLayer({
      id: "bordes",
      type: "line",
      source: "planimetria",
      paint: {
        "line-color": [
          "match",
          ["get", "estado"],
          "disponible", "#15803d", // verde más oscuro (#22c55e → #15803d)
          "credito", "#a16207",   // amarillo más oscuro (#eab308 → #a16207)
          "ocupado", "#991b1b",   // rojo más oscuro (#dc2626 → #991b1b)
          "#666666" // por defecto
        ],
        "line-width": 1,
      },
    });
    map.addLayer({
      id: "labels",
      type: "symbol",
      source: "planimetria",
      layout: {
        "text-field": ["concat", "Lote ", ["get", "numero"], "\n", ["get", "metros"], " m²"],
        "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
        "text-size": 11,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-justify": "center",
      },
      paint: {
        "text-color": "#363c42", 
        "text-opacity": 0.5,
        "text-halo-color": "#636669",
        "text-halo-width": 0.3,
      },
    });



    map.on("mousemove", "lotes", (e) => {
      if (!e.features?.length) return;

      const feature = e.features[0];
      const coords = e.lngLat;
      const { numero,name, estado,financiamiento,precio } = feature.properties as any;

      if (popup) popup.remove();

      popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
      })
        .setLngLat(coords)
        .setHTML(`
          <div>
            <h3>Lote # ${numero}</h3>
            <p><b>Estado:</b> ${estado}</p>
          </div>
        `)
        .addTo(map);
    });

    map.on("mouseleave", "lotes", () => {
      if (popup) {
        popup.remove();
        popup = null;
      }
    });

    map.on("click", "lotes", (e) => {
      if (!e.features?.length) return;
      const feature = e.features[0];
      sidebarData.value = feature.properties as any;
      showSidebar.value = true;
    });

    map.on("mouseenter", "lotes", () => {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "lotes", () => {
      map.getCanvas().style.cursor = "";
    });
  });
});

onBeforeUnmount(() => {
  if (map) map.remove();
});
</script>

<template>
  <div class="flex w-full h-full">
    <div ref="mapContainer" class="flex-1 rounded-lg"></div>

    <transition name="slide">
      <div
        v-if="showSidebar"
        class="w-84 bg-slate-50  p-4 relative"
      >
        <button
          @click="showSidebar = false"
          class="absolute cursor-pointer top-2 right-2 text-slate-800 bg-amber-400 hover:bg-amber-500 p-2 rounded-full"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10z"/></svg>
        </button>
        <section class="flex flex-col w-full justify-between items-center h-full">
          <main class="flex flex-col justify-center items-start w-full">
              <h2 class="flex w-full justify-between items-center text-xl font-bold mb-2 text-slate-800 pr-10">Lote # {{ sidebarData?.numero }} <strong :class="sidebarData?.estado==='disponible'?'text-white bg-red-400 text-sm py-1 px-3 rounded-full':'text-white bg-slate-400 text-sm py-1 px-3 rounded-full'">Bs {{ sidebarData?.precio.toFixed(3) }}</strong> </h2>
              <p v-if="sidebarData?.estado==='disponible'" class="flex gap-2 justify-start items-center"><b class="text-slate-800 text-sm">Estado:</b> <strong class="text-sm font-bold bg-emerald-500 px-2 py-1 rounded-full text-white">{{ sidebarData?.estado }}</strong> </p>
              <p v-if="sidebarData?.estado==='credito'" class="flex gap-2 justify-start items-center"><b class="text-slate-800 text-sm">Estado:</b> <strong class="text-sm font-bold bg-amber-400 px-2 py-1 rounded-full text-white">{{ sidebarData?.estado }}</strong> </p>
              <p v-if="sidebarData?.estado==='ocupado'" class="flex gap-2 justify-start items-center"><b class="text-slate-800 text-sm">Estado:</b> <strong class="text-sm font-bold bg-red-400 px-2 py-1 rounded-full text-white">{{ sidebarData?.estado }}</strong> </p>
              <p v-if="sidebarData?.estado==='disponible'" class="flex gap-2 bg-slate-400/10 py-2 px-3 rounded-lg justify-start items-center mt-2"><strong class="flex gap-1 justify-center items-center text-xs border border-slate-500 rounded-full px-2 py-1 text-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0"/></g></svg>
                Al Contado</strong>
                <strong v-if="sidebarData?.financiamiento" class="flex gap-1 justify-center items-center text-xs border border-slate-500 rounded-full px-2 py-1 text-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0"/></g></svg>
                Con Financiamiento</strong>
              
              </p>
              <div class="mt-4 text-sm text-gray-600">
                Descripción y detalle del lote
              </div>
          </main>
          <footer v-if="sidebarData?.estado==='disponible'" class="flex justify-center gap-2 py-2 px-3 items-center w-full border-t border-slate-200">
            <button type="button"   data-modal-hide="default-modal"  class="py-2 flex gap-2 justify-center items-center px-3 cursor-pointer text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v4h10V4zm0 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"/></svg>
                  Calcular</button>
            <a href="https://wa.me/59170516064?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios%20por%20favor." 
    target="_blank"  data-modal-hide="default-modal" type="button" class="py-2 flex gap-2 justify-center items-center px-3  cursor-pointer text-center text-sm font-medium text-white focus:outline-none bg-emerald-500 rounded-lg border border-gray-200 hover:bg-emerald-600 hover:text-emerald-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>
                  Reservar visita</a>
          </footer>
        </section>
        
      
      </div>
    </transition>
  </div>
</template>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
</style>

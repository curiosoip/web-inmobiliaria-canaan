<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import maplibregl from "maplibre-gl";
import type { FeatureCollection, Polygon, GeoJsonProperties } from "geojson";

const mapContainer = ref<HTMLDivElement | null>(null);
let map: maplibregl.Map;

onMounted(() => {
  if (!mapContainer.value) return;

  map = new maplibregl.Map({
    container: mapContainer.value,
    style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json", // estilo urbano (sin océano azul)
    center: [-68.078, -16.568], // Achumani - La Paz
    zoom: 16,
  });

  map.on("load", () => {
    const planimetria: FeatureCollection<Polygon, GeoJsonProperties> = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: { name: "Lote Disponible", estado: "disponible" },
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
          properties: { name: "Lote a Crédito", estado: "credito" },
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
          properties: { name: "Lote Ocupado", estado: "ocupado" },
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

    // Colorear según estado
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
        "fill-opacity": 0.6,
      },
    });

    // Bordes
    map.addLayer({
      id: "bordes",
      type: "line",
      source: "planimetria",
      paint: {
        "line-color": "#000",
        "line-width": 2,
      },
    });
  });
});

onBeforeUnmount(() => {
  if (map) map.remove();
});
</script>

<template>
  <div ref="mapContainer" class="w-full h-full rounded-lg"></div>
</template>

<style>
@import "maplibre-gl/dist/maplibre-gl.css";
</style>

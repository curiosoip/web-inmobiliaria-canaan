<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type * as Leaflet from "leaflet"; 

let L: typeof Leaflet; 

const mapContainer = ref<HTMLDivElement | null>(null);




onMounted(async () => {
  L = (await import('leaflet')).default;
  await import('leaflet/dist/leaflet.css');

  if (!mapContainer.value) return;

  const map = L.map(mapContainer.value).setView([-16.5, -68.15], 13);

  const customIcon = L.icon({
    iconUrl: new URL("../assets/pin.svg", import.meta.url).toString(), 
    iconSize: [40, 40],
    iconAnchor: [20, 40], 
    popupAnchor: [0, -40], 
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© Inmobiliaria Canaan',
  }).addTo(map);

  L.marker([-16.5, -68.15],{ icon: customIcon })
    .addTo(map)
    .bindPopup('<b>Inmobiliaria</b><br>Canaán')
    .openPopup();
});
</script>

<template>
  <div class="flex gap-2 justify-center items-center w-full h-64 rounded-lg ">
    <div ref="mapContainer" class="w-full h-full z-20"></div>
    <a
      href="https://www.openstreetmap.org/?mlat=-16.5&mlon=-68.15#map=13/-16.5000/-68.1500"
      target="_blank"
      rel="noopener noreferrer"
      class=" text-amber-500 hover:text-amber-700"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.536 21.886a1 1 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886"/>
      </svg>
    </a>
  </div>
</template>

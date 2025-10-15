<template>
  <div
    class="flex relative flex-col w-full max-w-sm mx-4 pb-5 border border-slate-50
           bg-gradient-to-t from-white via-slate-100 to-white 
           rounded-4xl shadow-sm overflow-visible"
  >
    <!-- Precio -->
    <div
      class="flex items-center justify-center mb-2 relative transform -rotate-2 bg-slate-800 px-4 rounded-full"
    >
      <h5 class="text-4xl font-extrabold text-slate-100 transform rotate-1 tracking-tight">
        {{ precio }}
      </h5>
    </div>

    <!-- Imagen principal -->
    <div class="relative lg:[150%] -mx-0 lg:-mx-5 mt-2">
      <img
        :src="img"
        :alt="tipo"
        class="w-full border-2 border-white h-48 object-cover rounded-4xl shadow-md shadow-slate-600/40"
      />

      <!-- Etiquetas -->
      <span
        class="absolute bottom-2 left-5 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
      >
        financiamiento
      </span>
      <span
        class="absolute top-2 left-5 bg-slate-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-amber-900 dark:text-amber-300"
      >
        +Servicios Básicos
      </span>

      <!-- Tipo de vivienda -->
      <span
        class="absolute flex gap-1 justify-center items-center bottom-2 right-5 bg-slate-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-amber-900 dark:text-amber-300"
      >
        <span v-html="iconTipo"></span>
        {{ tipo }}
      </span>
    </div>

    <!-- Descripción -->
    <div
      class="px-4 flex flex-col justify-between gap-1 text-xs font-semibold text-slate-800 py-4"
    >
      {{ descripcion }}
    </div>

    <!-- Botones -->
    <div
      class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-1"
    >
      <button
        @click="mostrarModal = true"
        class="cursor-pointer flex gap-1 w-35 justify-center items-center border bg-slate-50 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium rounded-full text-sm px-2 py-1 shadow-md"
      >
        Ver detalle
      </button>

      <a
        href="https://wa.me/59170516064?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios%20por%20favor."
        target="_blank"
        class="cursor-pointer text-white flex gap-1 w-35 justify-center items-center bg-emerald-600 hover:bg-emerald-700 font-medium rounded-full text-sm px-2 py-1 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
          />
        </svg>
        Reservar visita
      </a>
    </div>

   <div
    v-if="mostrarModal"
    class="fixed inset-0 z-[100] flex items-center px-3 justify-center bg-black/40 backdrop-blur-sm"
  >
    <div class="relative bg-slate-50 rounded-lg shadow-lg max-w-3xl w-full m-4">
      <!-- Encabezado -->
      <div class="flex bg-slate-900 items-center justify-between p-4 rounded-t-lg">
        <h3 class="flex gap-2 items-center text-sm font-semibold text-white">
          <svg v-if="tipo==='casa'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g fill="none"><path fill="url(#SVGkm4eqcHj)" d="M6 9h4v5H6z"/><path fill="url(#SVG4sqiUdhg)" d="M8.687 2.273a1 1 0 0 0-1.374 0l-4.844 4.58A1.5 1.5 0 0 0 2 7.943v4.569a1.5 1.5 0 0 0 1.5 1.5h3v-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v4h3a1.5 1.5 0 0 0 1.5-1.5v-4.57a1.5 1.5 0 0 0-.47-1.09z"/><path fill="url(#SVGbhYexcuE)" fill-rule="evenodd" d="m8.004 2.636l5.731 5.41a.75.75 0 1 0 1.03-1.091L8.86 1.382a1.25 1.25 0 0 0-1.724.007L1.23 7.059a.75.75 0 0 0 1.038 1.082z" clip-rule="evenodd"/><defs><linearGradient id="SVGkm4eqcHj" x1="8" x2="4.796" y1="9" y2="14.698" gradientUnits="userSpaceOnUse"><stop stop-color="#944600"/><stop offset="1" stop-color="#cd8e02"/></linearGradient><linearGradient id="SVG4sqiUdhg" x1="3.145" x2="14.93" y1="1.413" y2="10.981" gradientUnits="userSpaceOnUse"><stop stop-color="#ffd394"/><stop offset="1" stop-color="#ffb357"/></linearGradient><linearGradient id="SVGbhYexcuE" x1="10.262" x2="6.945" y1="-.696" y2="7.895" gradientUnits="userSpaceOnUse"><stop stop-color="#ff921f"/><stop offset="1" stop-color="#eb4824"/></linearGradient></defs></g></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="none"><path fill="url(#SVGteQkLezk)" d="M5.5 2A1.5 1.5 0 0 0 4 3.5v14a.5.5 0 0 0 .5.5h10.003C15.33 18 16 17.33 16 16.502V9.5A1.5 1.5 0 0 0 14.5 8H13V3.5A1.5 1.5 0 0 0 11.5 2z"/><path fill="url(#SVGtrUnjOrn)" d="M5.5 2A1.5 1.5 0 0 0 4 3.5v14a.5.5 0 0 0 .5.5h10.003C15.33 18 16 17.33 16 16.502V9.5A1.5 1.5 0 0 0 14.5 8H13V3.5A1.5 1.5 0 0 0 11.5 2z"/><path fill="url(#SVGlt9c7b2t)" d="M5.5 2A1.5 1.5 0 0 0 4 3.5v14a.5.5 0 0 0 .5.5h10.003C15.33 18 16 17.33 16 16.502V9.5A1.5 1.5 0 0 0 14.5 8H13V3.5A1.5 1.5 0 0 0 11.5 2z"/><path fill="url(#SVGp5rzqbsF)" d="M6.75 6.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"/><path fill="url(#SVGp5rzqbsF)" d="M11 5.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"/><path fill="url(#SVGp5rzqbsF)" d="M11 8.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/><path fill="url(#SVGp5rzqbsF)" d="M7.5 8.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"/><path fill="url(#SVGp5rzqbsF)" d="M7.5 11.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/><path fill="url(#SVGNehJlu7j)" d="M14 15h3v4h-3z"/><path fill="url(#SVGVuhbQc6Y)" d="M12 15.46c0-.292.127-.569.349-.759l2.826-2.422a.5.5 0 0 1 .651 0l2.825 2.422c.221.19.349.467.349.76v3.04a.5.5 0 0 1-.5.5l-2-.001v-2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V19h-2a.5.5 0 0 1-.5-.5z"/><path fill="url(#SVG75GD8bFX)" fill-rule="evenodd" d="M14.518 11.359a1.5 1.5 0 0 1 1.964 0l3.26 2.824a.75.75 0 1 1-.983 1.134L15.5 12.492l-3.259 2.825a.75.75 0 0 1-.982-1.134z" clip-rule="evenodd"/><defs><linearGradient id="SVGteQkLezk" x1="4" x2="19.257" y1="2.5" y2="17.149" gradientUnits="userSpaceOnUse"><stop stop-color="#29c3ff"/><stop offset="1" stop-color="#2764e7"/></linearGradient><linearGradient id="SVGp5rzqbsF" x1="7.35" x2="11.401" y1="4.167" y2="12.916" gradientUnits="userSpaceOnUse"><stop stop-color="#fdfdfd"/><stop offset="1" stop-color="#b3e0ff"/></linearGradient><linearGradient id="SVGNehJlu7j" x1="15.5" x2="12.853" y1="15" y2="19.413" gradientUnits="userSpaceOnUse"><stop stop-color="#944600"/><stop offset="1" stop-color="#cd8e02"/></linearGradient><linearGradient id="SVGVuhbQc6Y" x1="11.764" x2="18.118" y1="12.349" y2="18.864" gradientUnits="userSpaceOnUse"><stop stop-color="#ffd394"/><stop offset="1" stop-color="#ffb357"/></linearGradient><linearGradient id="SVG75GD8bFX" x1="15.929" x2="15.193" y1="9.711" y2="15.112" gradientUnits="userSpaceOnUse"><stop stop-color="#ff921f"/><stop offset="1" stop-color="#eb4824"/></linearGradient><radialGradient id="SVGtrUnjOrn" cx="0" cy="0" r="1" gradientTransform="matrix(0 3.5 -2.3125 0 13 17)" gradientUnits="userSpaceOnUse"><stop stop-color="#4a43cb"/><stop offset=".914" stop-color="#4a43cb" stop-opacity="0"/></radialGradient><radialGradient id="SVGlt9c7b2t" cx="0" cy="0" r="1" gradientTransform="matrix(-4.5 3.5 -1.8232 -2.3441 15 14)" gradientUnits="userSpaceOnUse"><stop stop-color="#4a43cb"/><stop offset=".914" stop-color="#4a43cb" stop-opacity="0"/></radialGradient></defs></g></svg>
          <div class="flex flex-col ">
             <strong class="text-sm text-amber-400 font-bold">
            {{ nombreDepartamento }}
            </strong>
            <span class="text-white  text-lg font-semibold">
              {{ nombre }}
            </span>
          </div>
         
        </h3>
        <button
          @click="mostrarModal = false"
          class="text-gray-400 hover:text-gray-200 cursor-pointer rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"/></g></svg>
        </button>
      </div>

     <div v-if="galeria?.length" class="relative w-full h-64 flex items-center justify-center bg-gray-100">

      <!-- Loader -->
      <div
        v-if="!imagenCargada"
        class="absolute inset-0 flex items-center justify-center bg-gray-200/50 rounded-lg"
      >
        <svg class="animate-spin h-10 w-10 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>

      <img
        v-if="galeria[currentIndex]"
        :src="galeria[currentIndex].imagen_url"
        class="w-full h-64 md:h-72 lg:h-80 object-cover"
        @load="onImageLoad"
        @loadstart="onImageStart"
      />

      <button v-if="galeria && galeria.length > 1" @click="prevImage" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-800/20 text-amber-500 cursor-pointer hover:text-white p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M20.834 8.037L9.64 14.5c-1.43.824-1.43 2.175 0 3l11.194 6.463c1.43.826 2.598.15 2.598-1.5V9.537c0-1.65-1.17-2.326-2.598-1.5"/></svg>
      </button>
      <button v-if="galeria && galeria.length > 1" @click="nextImage" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-800/20 text-amber-500 cursor-pointer hover:text-white p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M11.166 23.963L22.36 17.5c1.43-.824 1.43-2.175 0-3L11.165 8.037c-1.43-.826-2.598-.15-2.598 1.5v12.926c0 1.65 1.17 2.326 2.598 1.5z"/></svg>
      </button>

    </div>

      <div v-else class="flex w-full py-8 justify-center items-center text-3xl text-center text-slate-500">
        Sin imágenes
      </div>

      <div
        class="flex flex-col gap-3 justify-center w-full md:flex-row md:justify-between items-center p-4 border-t border-gray-200"
      >
        <div class="flex gap-3 items-center w-full justify-center md:justify-start ">
          <div v-if="props.caracteristicas && props.caracteristicas.length" class="px-4 py-2 flex flex-wrap gap-2">
            <span 
              v-for="(c, index) in props.caracteristicas" 
              :key="index"
              class="flex flex-col items-center gap-1 bg-slate-800/10 text-amber-500 text-xs font-bold p-2 rounded-lg "
            >
              <strong class="text-lg">{{ c.cantidad }}</strong>
              <p class="text-slate-800">{{ c.nombre }} </p> 
            </span>
          </div>

          
        </div>
        <div class="flex flex-col w-full justify-center items-center md:items-end">
          <div class="text-2xl text-slate-700 font-bold flex w-full gap-2 justify-end items-center md:justify-end">
          <p class="text-sm font-normal ">Superficie: </p>{{ superficie }} M2
          </div>
           <a
        :href="`https://wa.me/59170516064?text=Hola,%20quisiera%20pasar%20a%20ver%20-%20${tipo}:%20${nombre}-${nombreDepartamento}%20por%20favor.`"
        target="_blank"
        class="cursor-pointer text-white flex w-full gap-1 mt-3 justify-center items-center bg-emerald-600 hover:bg-emerald-700 font-medium rounded-full text-sm px-2 py-1 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
          />
        </svg>
        Reservar visita
      </a>

        </div>
        
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import PlanimetriaMapComponent from "./PlanimetriaMapComponent.vue";

const props = defineProps<{
  img: string;
  nombreDepartamento: string; 
  tipo: string;
  nombre:string;
  descripcion: string;
  precio: string;
  superficie:string;
  galeria?: { id_imagen: string; imagen_url: string }[];
  caracteristicas?: { nombre: string; cantidad: number | number;}[];
}>();

const mostrarModal = ref(false);
const currentIndex = ref(0);
const imagenCargada = ref(false);



// Determinar ícono según tipo
const iconTipo = computed(() => {
  if (props.tipo === "Departamento" || props.tipo === "Duplex") {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 36"><path fill="#ffcc4d" d="M14 34a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2H16a2 2 0 0 0-2 2z"/><path fill="#bcbec0" d="M34 12H20v2h16a2 2 0 0 0-2-2"/><path fill="#55acee" d="M20 16h14v20H20z"/><path fill="#ffe8b6" d="M18 0H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h18V2a2 2 0 0 0-2-2"/><path fill="#bcbec0" d="M18 0H2a2 2 0 0 0-2 2h20a2 2 0 0 0-2-2"/><path fill="#55acee" d="M2 22h16v4H2zm0-6h16v4H2zm0-6h16v4H2zm0-6h16v4H2zm0 24h16v8H2z"/><path fill="#3b88c3" d="M6 32h8v4H6zm17 0h8v4h-8z"/><path fill="#ffcc4d" d="M20 26h15v2H20zm0-6h15v2H20z"/><path fill="#dd2e44" d="M36 7a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><path fill="#58595b" d="M26 9h2v3h-2zm4 0h2v3h-2z"/><path fill="#f4abba" d="M24 5h2v2h-2z"/><path fill="#fff" d="M26 5h2v2h-2z"/><path fill="#f4abba" d="M28 5h2v2h-2z"/><path fill="#fff" d="M30 5h2v2h-2z"/><path fill="#f4abba" d="M32 5h2v2h-2z"/></svg>`;
  } else {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><g fill="none"><path fill="url(#SVGkm4eqcHj)" d="M6 9h4v5H6z"/><path fill="url(#SVG4sqiUdhg)" d="M8.687 2.273a1 1 0 0 0-1.374 0l-4.844 4.58A1.5 1.5 0 0 0 2 7.943v4.569a1.5 1.5 0 0 0 1.5 1.5h3v-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v4h3a1.5 1.5 0 0 0 1.5-1.5v-4.57a1.5 1.5 0 0 0-.47-1.09z"/><path fill="url(#SVGbhYexcuE)" fill-rule="evenodd" d="m8.004 2.636l5.731 5.41a.75.75 0 1 0 1.03-1.091L8.86 1.382a1.25 1.25 0 0 0-1.724.007L1.23 7.059a.75.75 0 0 0 1.038 1.082z" clip-rule="evenodd"/><defs><linearGradient id="SVGkm4eqcHj" x1="8" x2="4.796" y1="9" y2="14.698" gradientUnits="userSpaceOnUse"><stop stop-color="#944600"/><stop offset="1" stop-color="#cd8e02"/></linearGradient><linearGradient id="SVG4sqiUdhg" x1="3.145" x2="14.93" y1="1.413" y2="10.981" gradientUnits="userSpaceOnUse"><stop stop-color="#ffd394"/><stop offset="1" stop-color="#ffb357"/></linearGradient><linearGradient id="SVGbhYexcuE" x1="10.262" x2="6.945" y1="-.696" y2="7.895" gradientUnits="userSpaceOnUse"><stop stop-color="#ff921f"/><stop offset="1" stop-color="#eb4824"/></linearGradient></defs></g></svg>`;
  }
});

function onImageStart() {
  imagenCargada.value = false; // comienza la carga
}

function onImageLoad() {
  imagenCargada.value = true; // imagen cargada
}



function nextImage() {
  if (!props.galeria || !props.galeria.length) return;
  currentIndex.value = (currentIndex.value + 1) % props.galeria.length;
  imagenCargada.value = false;
}

function prevImage() {
  if (!props.galeria || !props.galeria.length) return;
  currentIndex.value = (currentIndex.value - 1 + props.galeria.length) % props.galeria.length;
  imagenCargada.value = false;
}
</script>
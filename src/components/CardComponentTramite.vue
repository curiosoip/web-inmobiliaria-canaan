<template>
  <div
    class="flex relative flex-col w-full max-w-sm mx-4 pb-5 border border-slate-50
           bg-gradient-to-t from-white via-slate-100 to-white 
           rounded-4xl shadow-sm overflow-visible h-56" 
  >
    <div class="flex items-center justify-center mb-2 relative transform py-1 -rotate-2 bg-slate-800 px-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-15 h-15 bg-amber-500 p-2 rounded-lg -translate-y-2 mr-2 flex text-slate-800" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 3c-1.27 0-2.4.8-2.82 2H3v2h1.95L2 14c-.47 2 1 3 3.5 3s4.06-1 3.5-3L6.05 7h3.12c.33.85.98 1.5 1.83 1.83V20H2v2h20v-2h-9V8.82c.85-.32 1.5-.97 1.82-1.82h3.13L15 14c-.47 2 1 3 3.5 3s4.06-1 3.5-3l-2.95-7H21V5h-6.17C14.4 3.8 13.27 3 12 3m0 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-6.5 5.25L7 14H4zm13 0L20 14h-3z"/>
      </svg>
      <h5 class="text-lg font-extrabold text-center text-slate-100 transform rotate-1 flex w-full justify-center items-center tracking-tight">
        {{ titleUrbanizacion }}
      </h5>
    </div>

    <div class="flex w-full justify-center items-center gap-2 text-sm font-semibold text-slate-700 px-4 py-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-30 h-30 max-w-30" viewBox="0 0 48 48">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33 42.5h5.5a4 4 0 0 0 4-4v-4.084m-37 2V38.5a4 4 0 0 0 4 4h7.688m0-37H9.5a4 4 0 0 0-4 4v3.172M30.813 5.5H38.5a4 4 0 0 1 4 4v3.172m.778 2.675L22.832 3.541a1.75 1.75 0 0 0-2.389.64l-15.3 26.508a1.75 1.75 0 0 0 .64 2.39h0l20.445 11.806a1.75 1.75 0 0 0 2.39-.64l15.301-26.508a1.75 1.75 0 0 0-.64-2.39m-9.028 3.831l-13.52-7.919m15.275 13.333l-17.233-9.95m15.249 13.403L16.79 18.094" stroke-width="1"/>
      </svg>
      {{ descripcion }}
    </div>

    <button 
      type="button"
      @click="showModal = true"
      class="absolute -bottom-5 left-1/2 cursor-pointer transform -translate-x-1/2 text-white flex gap-2 w-50 justify-center items-center bg-amber-400 hover:bg-amber-500 font-medium rounded-full text-sm px-4 py-2 shadow-md"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
        <path fill="currentColor" fill-rule="evenodd" d="M3 2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h5.25a.75.75 0 0 1 0 1.5H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.25a.75.75 0 0 1-1.5 0V3a.5.5 0 0 0-.5-.5zm12.28 8.72a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.97-1.97a.75.75 0 0 1 1.06 0M4.75 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8m.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
      </svg>
      Ver requisitos
    </button>
  </div>

  <div v-if="showModal" class="fixed inset-0 z-50 flex justify-center items-center bg-black/50 overflow-auto">
    <div class="relative p-4 w-full max-w-5xl max-h-full">
      <div class="relative bg-slate-50 rounded-lg shadow-sm dark:bg-gray-700">
        <!-- HEADER -->
        <div class="flex bg-slate-900 items-center justify-between p-4 md:p-5 rounded-t-lg border border-slate-600">
          <h3 class="flex gap-2 justify-start items-center text-sm font-semibold text-gray-600 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="text-slate-100" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M4 4h4v10H4zm0 16v-4h4v4zm16 0H10V10h10zm0-12H10V4h10z"/>
            </svg>
            <div class="flex flex-col gap-2">
              <strong class="text-xl flex text-amber-400 font-bold">{{ ciudadNombre }}</strong>
              <h4 class="text-white  text-xs font-semibold">{{ titleUrbanizacion }}</h4>
            </div>
            
          </h3>
          <button
            type="button"
            @click="showModal = false"
            class="text-gray-400 cursor-pointer bg-transparent hover:text-gray-500 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <div class="max-h-[70vh] overflow-y-auto p-4 space-y-3">
          <h4 class="font-semibold text-lg mb-2 text-slate-700">Requisitos:</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li v-for="req in requisitos" :key="req.id_requisito_tramite" class="text-slate-600">
              <span class="font-medium">{{ req.nombre }}</span>
              <span v-if="req.descripcion"> - {{ req.descripcion }}</span>
              <span v-if="req.obligatorio" class="text-red-500 ml-1">(Obligatorio)</span>
            </li>
          </ul>
        </div>


        <div class="flex w-full justify-between items-center p-1 border-t border-gray-200 rounded-b">
          <div class="flex flex-col gap-3 md:flex-row justify-center md:justify-between items-center w-full px-4 py-2">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import PlanimetriaMapComponent from "./PlanimetriaMapComponent.vue";

interface Requisito {
  id_requisito_tramite: string;
  nombre: string;
  descripcion: string;
  obligatorio: boolean;
  archivo_requerido: boolean;
  orden: number;
  fecha_registro: string;
  fecha_actualizacion: string;
}

const props = defineProps<{
  img?: string;
  ciudad: string;
  titleUrbanizacion: string;
  descripcion: string;
  requisitos: Requisito[];
}>();


const showModal = ref(false);

const ciudadNombre = computed(() => {
  return props.ciudad === "lapaz" ? "La Paz" : props.ciudad === "cochabamba" ? "Cochabamba" : "Santa Cruz";
});
</script>

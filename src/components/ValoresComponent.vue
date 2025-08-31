<script setup lang="ts">
import { ref,computed } from 'vue';
import integridad from "../assets/imgs/integridad.jpg"
import calidad from "../assets/imgs/calidad.jpg"
import innovacion from "../assets/imgs/innovacion.jpg"
import compromiso from "../assets/imgs/compromiso.jpg"
import sostenible from "../assets/imgs/sostenible.jpg"
import confianza from "../assets/imgs/confianza.jpg"
import adaptable from "../assets/imgs/adaptable.jpg"

const tabs = [
  { 
    name: 'Integridad', 
    disabled: false,
    img:integridad.src,
    alt:"Imagen de Integridad",
    content: `
          <p class="text-gray-500 bg-slate-100 p-2 rounded-lg  text-lg">Actuamos con transparencia, ética y responsabilidad en cada proyecto y transacción.</p>
    ` 
  },
  { 
    name: 'Calidad', 
    disabled: false,
    img:calidad.src,
    content: `

          <p class="text-gray-500 bg-slate-100 p-2 rounded-lg  text-lg">Garantizamos altos estándares en productos, servicios y procesos.</p>

    `
  },
  { 
    name: 'Innovación', 
    disabled: false,
    img:innovacion.src,
    content: `

          <p class="text-gray-500 bg-slate-100 p-2 rounded-lg  text-lg">Buscamos soluciones creativas y tecnológicas para mejorar continuamente.</p>

    `
  },
  { 
    name: 'Compromiso', 
    disabled: false,
    img:compromiso.src,
    content: `

          <p class="text-gray-500 bg-slate-100 p-2 rounded-lg  text-lg">Cumplimos con nuestros clientes, socios y comunidad.</p>

    `
  },
  { 
    name: 'Sostenibilidad', 
    disabled: false,
    img:sostenible.src,
    content: `

          <p class="text-gray-500 bg-slate-100 p-2 rounded-lg  text-lg">Promovemos prácticas responsables que cuiden el medio ambiente y fomenten el desarrollo social.</p>

    `
  },
  { 
    name: 'Confianza', 
    disabled: false,
    img:confianza.src,
    content: `

          <p class="text-gray-500 bg-slate-100 p-2 rounded-lg text-lg">Construimos relaciones sólidas y duraderas basadas en el respeto mutuo.</p>

    `
  },
  { 
    name: 'Adaptabilidad', 
    disabled: false,
    img:adaptable.src,
    content: `
   
          <p class="text-gray-500 bg-slate-100 p-2 rounded-lg text-lg">Respondemos de manera ágil a las necesidades cambiantes del mercado y de nuestros clientes.</p>

    `
  }
];

const activeTab = ref('Integridad');

function selectTab(tab: typeof tabs[0]) {
  if (!tab.disabled) {
    activeTab.value = tab.name;
  }
}
const activeTabObj = computed(() => tabs.find(t => t.name === activeTab.value));

</script>

<template>
  <div class="md:flex">
    <ul class="flex-column space-y-2 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-3 md:mb-0">
      <li v-for="tab in tabs" :key="tab.name">
        <a
          href="#"
          @click.prevent="selectTab(tab)"
          :class="[
            'inline-flex items-center px-4 py-2 rounded-lg w-full',
            tab.disabled ? 'text-gray-400 cursor-not-allowed bg-gray-50 ' :
            activeTab === tab.name 
              ? 'text-white bg-amber-500 '
              : 'text-gray-500 bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
          ]"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="currentColor" d="M11.166 23.963L22.36 17.5c1.43-.824 1.43-2.175 0-3L11.165 8.037c-1.43-.826-2.598-.15-2.598 1.5v12.926c0 1.65 1.17 2.326 2.598 1.5z"/></svg>
          {{ tab.name }}
        </a>
      </li>
    </ul>
    <main class="flex flex-col gap-2 justify-center items-start">
      <div class="p-2 bg-gray-50 text-medium text-gray-500  rounded-lg w-full" v-html="tabs.find(t => t.name === activeTab)?.content"></div>
      <img 
        :src="activeTabObj?.img" 
        :alt="activeTabObj?.alt" 
        class="w-full h-40 rounded-lg mt-2 object-cover object-center"
      />
    </main>
    
  </div>
</template>

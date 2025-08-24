<script setup lang="ts">
import { ref } from 'vue';

// Tabs con contenido HTML
const tabs = [
  { 
    name: 'Integridad', 
    disabled: false,
    content: `

          <p class="text-gray-500 text-lg">Actuamos con transparencia, ética y responsabilidad en cada proyecto y transacción.</p>

    ` 
  },
  { 
    name: 'Calidad', 
    disabled: false,
    content: `

          <p class="text-gray-500 text-lg">Garantizamos altos estándares en productos, servicios y procesos.</p>

    `
  },
  { 
    name: 'Innovación', 
    disabled: false,
    content: `

          <p class="text-gray-500 text-lg">Buscamos soluciones creativas y tecnológicas para mejorar continuamente.</p>

    `
  },
  { 
    name: 'Compromiso', 
    disabled: false,
    content: `

          <p class="text-gray-500 text-lg">Cumplimos con nuestros clientes, socios y comunidad.</p>

    `
  },
  { 
    name: 'Sostenibilidad', 
    disabled: false,
    content: `

          <p class="text-gray-500 text-lg">Promovemos prácticas responsables que cuiden el medio ambiente y fomenten el desarrollo social.</p>

    `
  },
  { 
    name: 'Confianza', 
    disabled: false,
    content: `

          <p class="text-gray-500 text-lg">Construimos relaciones sólidas y duraderas basadas en el respeto mutuo.</p>

    `
  },
  { 
    name: 'Adaptabilidad', 
    disabled: false,
    content: `
   
          <p class="text-gray-500 text-lg">Respondemos de manera ágil a las necesidades cambiantes del mercado y de nuestros clientes.</p>

    `
  }
];

const activeTab = ref('Integridad');

function selectTab(tab: typeof tabs[0]) {
  if (!tab.disabled) {
    activeTab.value = tab.name;
  }
}
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
          {{ tab.name }}
        </a>
      </li>
    </ul>

    <div class="p-6 bg-gray-50 text-medium text-gray-500  rounded-lg w-full" v-html="tabs.find(t => t.name === activeTab)?.content"></div>
  </div>
</template>

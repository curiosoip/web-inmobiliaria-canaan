<template>
  <form
    class="max-w-4xl flex w-full gap-3 justify-center items-center mx-auto"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 36 36"
    >
      <path
        fill="#007934"
        d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"
      />
      <path fill="#ffe000" d="M0 13h36v10H0z" />
      <path
        fill="#d52b1e"
        d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4"
      />
      <!-- ... resto de paths del svg ... -->
    </svg>

    <!-- Select -->
    <div class="relative flex w-full items-center">
       <select
        v-model="selectedCity"
        @change="goToCity"
        class="appearance-none w-full px-4 py-3 bg-emerald-600 text-white border border-emerald-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:bg-emerald-600"
      >
        <option value="lapaz">La Paz</option>
        <option value="cochabamba">Cochabamba</option>
        <option value="santacruz">Santa Cruz</option>
      </select>

      <!-- Icono flecha -->
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          class="text-white"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z"
          />
        </svg>
      </div>
    </div>
  </form>
</template>


<script setup>
import { ref, onMounted } from "vue";

const selectedCity = ref("lapaz");

onMounted(() => {
  const pathCity = window.location.pathname.split("/").pop();
  if (["lapaz", "cochabamba", "santacruz"].includes(pathCity)) {
    selectedCity.value = pathCity;
  }
});

const goToCity = () => {
  // Redirigir a la nueva página (Astro manejará el routing)
  window.location.href = `/urbanizaciones/${selectedCity.value}`;
};
</script>



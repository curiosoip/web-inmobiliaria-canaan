<template>
  <section
    id="servicios"
    class="relative w-full flex flex-col justify-center pt-10 px-4 pb-14 overflow-hidden bg-slate-100"
  >
    <div
      class="flex flex-col lg:flex-row w-full max-w-6xl justify-center mx-auto gap-10 items-center pb-10"
    >
      <!-- Loader -->
      <div v-if="loading" class="flex justify-center items-center w-full h-64">
        <svg
          class="animate-spin h-10 w-10 text-amber-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      </div>

      <!-- Urbanizaciones -->
      <CardComponent
        v-for="urb in urbanizaciones"
        :key="urb.id_urbanizacion"
        :img="urb.portada_url"
        :ciudad="props.title"
        :titleUrbanizacion="urb.nombre"
        :descripcion="urb.descripcion"
        v-if="!loading"
      />

      <!-- Mensaje si no hay urbanizaciones -->
      <h1
        v-if="!loading && urbanizaciones.length === 0"
        class="py-8 text-xl text-slate-400 font-semibold flex w-full max-w-xl justify-center items-center text-center"
      >
        Por el momento no contamos con urbanizaciones para este departamento.
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import CardComponent from "../components/CardComponent.vue";

interface Urbanizacion {
  id_urbanizacion: string;
  nombre: string;
  descripcion: string;
  portada_url: string;
  direccion?: string;
  total_lotes?: number;
  total_manzanas?: number;
  area_total?: number;
  fecha_registro?: string;
  fecha_actualizacion?: string;
  vertices?: any[];
  lotes?: any[];
}

const props = defineProps<{ title: string }>();

const urbanizaciones = ref<Urbanizacion[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const res = await fetch("https://canaan-inmobiliaria-admin.up.railway.app/api/departamentos/");
    const data = await res.json();

    const slugify = (text: string) =>
      text
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "")
        .replace(/[^a-z0-9]/g, "");

    const dep = data.find((d: any) => slugify(d.nombre).includes(props.title));
    urbanizaciones.value = dep?.urbanizaciones ?? [];
  } catch (err) {
    console.error("Error al obtener urbanizaciones:", err);
  } finally {
    loading.value = false;
  }
});
</script>

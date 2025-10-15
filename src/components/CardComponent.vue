<template>
  <div
    class="flex relative flex-col w-full max-w-sm mx-4 pb-5 border border-slate-50
            bg-gradient-to-t from-white via-slate-100 to-white 
            rounded-4xl shadow-sm overflow-visible"
  >
    <div
      class="flex items-center justify-center mb-2 relative transform -rotate-2 bg-slate-800 px-4 rounded-full"
    >
      <template v-if="ciudad === 'lapaz'">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 -translate-y-2 mr-2 text-amber-500" viewBox="0 0 36 36"><path fill="#292f33" d="M19.083 35.5L12.25 12.292s-1.42.761-2.604 1.637c-.313.231-1.977 2.79-2.312 3.04c-1.762 1.315-3.552 2.841-3.792 3.167C3.083 20.76 0 36 0 36z"/><path fill="#4b545d" d="m32 35l-5.5-19.75L18 4.542l-5.373 4.193l-.971 1.172C11.25 10.688 10 15.25 10 15.25L8.75 20L3.252 30.054L.917 34.791z"/><path fill="#fff" d="M3.252 30.054s7.873-10.783 7.894-11.388C11.167 18.062 10 15.25 10 15.25L8.75 20z"/><path fill="#292f33" d="M12 34h2l2-15.75l1.234-1.797l3.578-5.234l.094-1.469l-3.287 4.454L15 17.752l-2.388 7.362L12 27l-1.791 3.134L8 34zm12.059-17.616l-1.965 5.897L21 26l2.792 7.625l3.552-.062S23 26.625 23 26c0-.12.625-2.687.625-2.687l1.094-4.531L25 17.25z"/><path fill="#f1f1f1" d="m24.059 16.384l-1.778-.665l-1.531.875l-1.328-1.063l-2.188.922l3.578-5.234zm2.871 7.379l-1.711-1.388l-1.594.938l1.094-4.532l1.437 2.282z"/><path fill="#fff" d="M22.094 22.281L21 26l-.25-2.417zM12 27l-1.791 3.134l.353-2.431s.682-.578.938-.911s1.112-1.678 1.112-1.678zm3.208-11l2.411-1.796L15 17.752z"/><path fill="#292f33" d="M36 36s-.384-3.845-.854-7.083c-.369-2.543-2.757-6.303-4.099-7.115l-1.234-3.536l-2.023-5.102l-2.258-2.289l-1.844-1.626l-.505-.621L18 4.542l2.289 5.007l.524 1.67l3.246 5.165l.66 2.397l1.438 2.281l.774 2.701L28 27.5L26 34z"/><path fill="#5c903f" d="M33.708 32.438c-1.345 0-4.958.562-5.458.562c-2 0-4.25-1.75-5.25-1.75S19.406 33 17.406 33c-1.688 0-2.406-.812-4.719-.812c-.748 0-4.096.871-4.812.781C6.052 32.741 5.115 32 4.656 32C2 32 0 36 0 36h36s-.875-3.562-2.292-3.562"/><path fill="#f1f1f1" d="m12.627 8.735l2.123-.485l.656 1.844l2.125-.875l2.758.33L18 2.25z"/><path fill="#a8b6c0" d="m23.183 8.628l-1.443-.243l-1.451 1.164L18 2.25zM27.953 13l1.859 5.266l-1.729-2.828l-1.614-1.625l-.938-2.938zm7.193 15.917S35 25.032 33.875 23.75S31 21.771 31 21.771l1.438 3.271l1.458 1.417z"/></svg>
      </template>

      <template v-else-if="ciudad === 'cochabamba'">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 -translate-y-2 mr-2 text-slate-100 " viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12.6 2a2.4 2.4 0 0 1 2.394 2.236L15 4.4v1.186q0 .212-.044.417L15.049 6h3.744c.52 0 .885.275 1.224.603l.337.336a1.5 1.5 0 0 1 .102 2.008l-.102.114l-1.5 1.5a1.5 1.5 0 0 1-.913.432l-.148.007H16v7a1 1 0 0 1 .906.576l.043.108L17.72 21H18a1 1 0 0 1 .117 1.993L18 23H7a1 1 0 0 1-.117-1.993L7 21h.28l.771-2.316a1 1 0 0 1 .833-.677L9 18v-7H7.207a1.5 1.5 0 0 1-.95-.34l-.11-.1l-1.5-1.5a1.5 1.5 0 0 1 0-2.12l.335-.337c.302-.291.624-.541 1.057-.593L6.207 6h3.79l.047.003a2 2 0 0 1-.04-.277L10 5.586V4.4a2.4 2.4 0 0 1 2.236-2.394L12.4 2zm2.68 18H9.72l-.333 1h6.226zM11 14.766V18h3v-1.434zM9.9 8H6.415l1 1H10a1 1 0 0 1 1 1v2.434l3 1.8V10a1 1 0 0 1 1-1h2.586l1-1h-3.487l-2.305.461a1.5 1.5 0 0 1-.588 0zm2.7-4h-.2a.4.4 0 0 0-.392.32L12 4.4v1.186l.5.5l.5-.5V4.4a.4.4 0 0 0-.32-.392z"/></g></svg>
      </template>

      <template v-else>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 -translate-y-2 mr-2 text-amber-500" viewBox="0 0 36 36"><path fill="#c1694f" d="M21.978 20.424a29 29 0 0 0-.247-2.325a30.8 30.8 0 0 0-1.885-6.93c-.527-1.299-.943-2.043-.943-2.043l-3.613.466s.417.87.868 2.575c.183.692.371 1.524.54 2.495q.13.733.238 1.573q.152 1.172.242 2.549q.05.777.074 1.619c.006.204.015.401.018.611a14.5 14.5 0 0 1-.118 1.989c-.074.6-.182 1.197-.311 1.789a26 26 0 0 1-.67 2.475a35 35 0 0 1-.655 1.84c-.344.891-.69 1.692-.989 2.359c-.502 1.119-.871 1.863-.871 2.018c0 .49.35 1.408 2.797 2.02c3.827.956 4.196-.621 4.196-.621s.243-.738.526-2.192c.14-.718.289-1.605.424-2.678q.122-.963.222-2.116a62 62 0 0 0 .22-4.864c.002-.246.008-.484.008-.737c0-.64-.03-1.261-.071-1.872"/><path fill="#d99e82" d="M18.306 30.068c-1.403-.244-2.298-.653-2.789-.959c-.344.891-.69 1.692-.989 2.359c.916.499 2.079.895 3.341 1.114c.729.127 1.452.191 2.131.191c.414 0 .803-.033 1.176-.08c.14-.718.289-1.605.424-2.678c-.444.157-1.548.357-3.294.053m1.06-4.673c-1.093-.108-1.934-.348-2.525-.602a26 26 0 0 1-.67 2.475c.864.326 1.881.561 2.945.666c.429.042.855.064 1.27.064c.502 0 .978-.039 1.435-.099q.104-1.199.165-2.605c-.628.135-1.509.21-2.62.101m.309-2.133c.822 0 1.63-.083 2.366-.228c.002-.246.008-.484.008-.737c0-.641-.029-1.262-.071-1.873c-.529.138-1.285.272-2.352.286c-1.084-.005-1.847-.155-2.374-.306c.006.204.015.401.018.611a14.5 14.5 0 0 1-.118 1.989c.763.161 1.605.253 2.461.257zm-.249-4.577a12 12 0 0 0 2.304-.585a30 30 0 0 0-.485-2.513c-.496.204-1.199.431-2.181.572a9 9 0 0 1-2.129.077q.152 1.172.242 2.549c.152.006.29.029.446.029c.588.001 1.2-.043 1.803-.129m1.271-5.116a30 30 0 0 0-.852-2.4a9.5 9.5 0 0 1-1.737.659a9.2 9.2 0 0 1-1.951.339c.183.692.371 1.524.54 2.495a12.4 12.4 0 0 0 2.094-.376c.679-.188 1.31-.44 1.906-.717"/><path fill="#3e721d" d="M32.61 4.305c-.044-.061-4.48-5.994-10.234-3.39c-2.581 1.167-4.247 3.074-4.851 5.535c-1.125-1.568-2.835-2.565-5.093-2.968C6.233 2.376 2.507 9.25 2.47 9.32c-.054.102-.031.229.056.305s.217.081.311.015c.028-.02 2.846-1.993 7.543-1.157c4.801.854 8.167 1.694 8.201 1.702a.25.25 0 0 0 .245-.073c.032-.035 3.22-3.46 6.153-4.787c4.339-1.961 7.298-.659 7.326-.646a.25.25 0 0 0 .298-.07a.246.246 0 0 0 .007-.304"/><path fill="#5c913b" d="M27.884 7.63c-4.405-2.328-7.849-1.193-9.995.22c-2.575-.487-7.334-.459-11.364 4.707c-4.983 6.387-.618 14.342-.573 14.422a.376.376 0 0 0 .689-.086c.015-.054 1.527-5.52 5.35-10.118c2.074-2.496 4.55-4.806 6.308-6.34c1.762.298 4.327.947 6.846 2.354c4.958 2.773 7.234 7.466 7.257 7.513a.37.37 0 0 0 .379.212a.38.38 0 0 0 .325-.287c.02-.088 1.968-8.8-5.222-12.597"/></svg>
      </template>

      <h5 class="text-2xl font-extrabold text-slate-100 transform rotate-1 tracking-tight">
        {{ titleUrbanizacion }}
      </h5>
    </div>

    <!-- Imagen -->
    <div class="relative lg:[150%] -mx-0 lg:-mx-5 mt-2">
      <img
        :src="img"
        :alt="titleUrbanizacion"
        class="w-full border-2 border-white h-48 object-cover rounded-4xl shadow-md shadow-slate-600/40"
      />
      <span class="absolute top-2 left-5 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
        30 Disponibles
      </span>
      <span class="absolute top-2 right-5 bg-slate-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
        50 Lotes
      </span>
    </div>

    <!-- Descripción -->
    <div class="px-4 flex flex-col justify-between gap-1 text-xs font-semibold text-slate-800 py-4">
      {{ descripcion }}
    </div>

    <!-- Botón abrir modal -->
    <button
      @click="showModal = true"
      type="button"
      class="absolute -bottom-5 cursor-pointer left-1/2 transform -translate-x-1/2 text-white flex gap-2 w-50 justify-center items-center bg-amber-400 hover:bg-amber-500 font-medium rounded-full text-sm px-4 py-2 shadow-md"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h16c1.1 0 2 .9 2 2v6H10v10h4.55q.27.45.54.84c.29.43.57.82.83 1.16H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m4 2H4v10h4zM4 16v4h4v-4zm6-8h10V4H10zm8.5 14s-.58-.65-1.27-1.59c-.09-.13-.19-.27-.29-.41C16 18.66 15 16.89 15 15.5c0-1.9 1.6-3.5 3.5-3.5c.53 0 1.04.13 1.5.35c1.17.57 2 1.78 2 3.15c0 1.54-1.23 3.54-2.23 4.91c-.69.94-1.27 1.59-1.27 1.59m-1.2-6.4c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2"/></svg>
      Ver lotes disponibles
    </button>
  </div>

  <!-- MODAL -->
  <div
    v-if="showModal"
    class="fixed inset-0 z-[100] flex items-center px-3 justify-center bg-black/40 backdrop-blur-sm"
  >
    <div class="relative bg-slate-50 rounded-lg shadow-lg max-w-5xl w-full m-4">
      <!-- Encabezado del modal -->
      <div class="flex bg-slate-900 items-center justify-between p-4 rounded-t-lg">
        <h3 class="flex gap-2 items-center text-sm font-semibold text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h16c1.1 0 2 .9 2 2v6H10v10h4.55q.27.45.54.84c.29.43.57.82.83 1.16H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m4 2H4v10h4zM4 16v4h4v-4zm6-8h10V4H10zm8.5 14s-.58-.65-1.27-1.59c-.09-.13-.19-.27-.29-.41C16 18.66 15 16.89 15 15.5c0-1.9 1.6-3.5 3.5-3.5c.53 0 1.04.13 1.5.35c1.17.57 2 1.78 2 3.15c0 1.54-1.23 3.54-2.23 4.91c-.69.94-1.27 1.59-1.27 1.59m-1.2-6.4c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2"/></svg>
          <strong class="text-lg text-amber-400 font-bold">
            {{ ciudadLabel }}
          </strong>
          <span class="text-white ml-2 text-xs font-semibold">
            / {{ titleUrbanizacion }}
          </span>
        </h3>
        <button
          @click="showModal = false"
          class="text-gray-400 cursor-pointer hover:text-gray-200 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
        >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"/></g></svg>

        </button>
      </div>

      <!-- Contenido -->
      <div class="max-h-[70vh] overflow-y-auto">
        <div class="h-[50vh]">
          <PlanimetriaMapComponent />
        </div>
      </div>

      <!-- Footer -->
      <div class="flex flex-col gap-3 justify-center w-full md:flex-row md:justify-between items-center p-4 border-t border-gray-200">
        <div class="flex gap-3 items-center w-full justify-center md:justify-start ">
          <span class="flex flex-col justify-center items-center bg-green-100 text-green-800 text-xs font-medium p-2 rounded-sm">
            <strong class="text-lg">12</strong> disponibles
          </span>
          <span class="flex flex-col justify-center items-center bg-yellow-100 text-yellow-800 text-xs font-medium p-2 rounded-sm">
            <strong class="text-lg">5</strong> En Crédito
          </span>
          <span class="flex flex-col justify-center items-center bg-red-100 text-red-800 text-xs font-medium p-2 rounded-sm">
            <strong class="text-lg">8</strong> Ocupados
          </span>
        </div>
        <footer class="text-2xl text-slate-700 font-bold flex w-full justify-center md:justify-end">
          25 Urbanizaciones
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PlanimetriaMapComponent from "./PlanimetriaMapComponent.vue";

const props = defineProps({
  img: String,
  ciudad: String,
  titleUrbanizacion: String,
  descripcion: String,
  title: String,
});

const showModal = ref(false);

const ciudadLabel = computed(() => {
  if (props.title === "lapaz") return "La Paz";
  if (props.title === "cochabamba") return "Cochabamba";
  return "Santa Cruz";
});
</script>

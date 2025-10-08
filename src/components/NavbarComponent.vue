<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import logo from "../assets/logo.svg";

const activeSection = ref("inicio")
const isMenuOpen = ref(false)
const pathname = ref("");
const isMegaOpen = ref(false)

function toggleMegaMenu() {
  activeSection.value="servicios"
  isMegaOpen.value = !isMegaOpen.value
}



function scrollToSection(id) {
  
    const el = document.getElementById(id)
    
    if (el) {
      
        el.scrollIntoView({ behavior: "smooth" })
    }
    isMenuOpen.value = false 
}

let observer

onMounted(() => {
    const sections = document.querySelectorAll("section[id]")
       observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id
                }
            })
        },
        {
            threshold: 0.1,                 
            rootMargin: "-20% 0px -10% 0px" 
        }
    )


    sections.forEach((sec) => observer.observe(sec))
  
   
})

onBeforeUnmount(() => {
    if (observer) observer.disconnect()
})
</script>

<template>
    <nav class="bg-slate-800 border-b border-emerald-300/20 sticky w-full z-80 top-0 start-0">
        
      <div class="flex flex-wrap items-center justify-between mx-auto max-w-8xl">
            
            <a href="/" class="py-2 px-4 lg:px-12 bg-slate-800  flex items-center justify-center md:justify-start">
              <div class="flex items-center space-x-3">
                    <img :src="logo.src" alt="Canaan Inmobiliaria" class="w-20" />
                </div>
            </a>

            <div class="flex md:order-2 space-x-1 gap-1 justify-center items-center md:space-x-0 rtl:space-x-reverse px-3">
                <button type="button"
                    class="text-slate-800 flex gap-1 justify-center items-center bg-yellow-500 cursor-pointer border-2 border-yellow-400 hover:text-slate-950 font-medium rounded-lg text-lg px-4 py-1 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path fill="currentColor"
                            d="M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm-5.99 4h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm2 2h2v2h-2zm-4 0h2v2h-2zm2-6h2v2h-2zm2 2h2v2h-2z" />
                    </svg>
                    Pagar
                </button>
                <button class="flex gap-1 text-slate-800 bg-white rounded-md justify-center items-center  py-1 px-2 text-sm font-semibold cursor-pointer hover:text-slate-900 hover:bg-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/></svg>
                  <span class="hidden lg:flex">Ingresar</span> 
                </button>

                <button @click="isMenuOpen = !isMenuOpen" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:text-gray-300 focus:outline-none">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

            <div  :class="[
                'items-center justify-between bg-slate-900 px-3 py-3 rounded-md w-full md:flex md:w-auto md:order-1 transition-all duration-300',
                isMenuOpen ? 'flex' : 'hidden'
            ]" id="mega-menu-full">
                <ul
                    class="flex flex-col justify-center items-start md:items-center p-3 md:p-0  gap-1 lg:gap-3 font-medium md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <li>
                        <button  @click="scrollToSection('inicio')" :class="[
                            'transition-all duration-300 cursor-pointer font-semibold text-sm tracking-wider uppercase',
                            activeSection==='inicio' && isMegaOpen===false ? 'text-amber-300 font-bold' : 'text-slate-100 hover:text-amber-300'
                        ]">
                            INICIO
                        </button>
                    </li>
                    <li>
                 <button 
  @click="() => { toggleMegaMenu();}" 
  :class="[
    'flex gap-1 justify-center items-center transition-all duration-300 cursor-pointer font-semibold text-sm tracking-wider uppercase',
    activeSection === 'servicios' 
      ? 'text-amber-300 font-bold' 
      : 'text-slate-100 hover:text-amber-300'
  ]"
>
  SERVICIOS
  <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>



                </li>
                    
                    <li>
                        <button @click="scrollToSection('nosotros')" :class="[
                            'transition-all duration-300 cursor-pointer font-semibold text-sm tracking-wider uppercase',
                            activeSection === 'nosotros' ? 'text-amber-300 font-bold' : 'text-slate-100 hover:text-amber-300'
                        ]">
                            NOSOTROS
                        </button>
                    </li>
                    <li>
                        <button @click="scrollToSection('contacto')" :class="[
                            'transition-all duration-300 cursor-pointer font-semibold text-sm tracking-wider uppercase',
                            activeSection === 'contacto' ? 'text-amber-300 font-bold' : 'text-slate-100 hover:text-amber-300'
                        ]">
                            CONTACTO
                        </button>
                    </li>
                </ul>
            </div>
             
        </div>
            <div v-show="isMegaOpen"
      class=" border-emerald-300/20 shadow-xs bg-slate-900 border-y z-50">
  <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
    <ul>
      <li>
        <a href="/urbanizaciones/lapaz/lotes/" class="block p-3 rounded-lg hover:bg-slate-950 dark:hover:bg-gray-700">
          <div class=" text-amber-400 font-bold flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12.398 17.804C13.881 17.034 19 14.016 19 9A7 7 0 1 0 5 9c0 5.016 5.119 8.035 6.602 8.804a.86.86 0 0 0 .796 0M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.062 16.5c.615.456.938.973.938 1.5s-.323 1.044-.938 1.5c-.614.456-1.498.835-2.562 1.098S13.229 21 12 21s-2.436-.139-3.5-.402s-1.948-.642-2.562-1.098C5.323 19.044 5 18.527 5 18s.323-1.044.938-1.5"/></g></svg>
            VENTA DE LOTES Y VIVIENDAS</div>
          <span class="text-xs text-white ">
            Terrenos y viviendas residenciales en las mejores ubicaciones de Bolivia con servicios básicos garantizados.
          </span>
        </a>
      </li>
      <li>
        <a href="/consultoria/" class="block p-3 rounded-lg hover:bg-slate-950 dark:hover:bg-gray-700">
          <div class="text-amber-400 font-bold flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M16 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14c0 2.62-.73 5.18-2.11 7.39c.05.74 1.05 3.21 2.01 5.17c.19.38.11.84-.19 1.14s-.76.38-1.14.2c-1.99-.96-4.5-1.94-5.24-1.97A14 14 0 0 1 16 30m0-26C9.38 4 4 9.38 4 16s5.38 12 12 12a12 12 0 0 0 6.39-1.84c.32-.21 1.01-.63 4.58.84c-1.5-3.54-1.07-4.22-.87-4.54c1.23-1.93 1.89-4.16 1.89-6.46c0-6.62-5.38-12-12-12zm7.83 16.87l-1.67-1.11a4.997 4.997 0 0 1-8.33 0l-1.67 1.11A7 7 0 0 0 17.99 24c2.35 0 4.54-1.17 5.83-3.13zM22 13c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2c.01-1.09-.87-1.99-1.96-2zm-8 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2c.01-1.09-.87-1.99-1.96-2z"/></svg>
            CONSULTORÍA CONSTRUCTIVA</div>
          <span class="text-xs text-white">
            Asesoramiento especializado en proyectos de construcción, planificación y optimización de recursos.
          </span>
        </a>
      </li>
      <li>
        <a href="/tramites/lapaz/" class="block p-3 rounded-lg hover:bg-slate-950 dark:hover:bg-gray-700">
          <div class="text-amber-400 font-bold flex gap-2 items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 13h6q.425 0 .713-.288T16 12t-.288-.712T15 11H9q-.425 0-.712.288T8 12t.288.713T9 13m0 3h6q.425 0 .713-.288T16 15t-.288-.712T15 14H9q-.425 0-.712.288T8 15t.288.713T9 16m0 3h3q.425 0 .713-.288T13 18t-.288-.712T12 17H9q-.425 0-.712.288T8 18t.288.713T9 19m-3 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.587 1.413T18 22zm7-14q0 .425.288.713T14 9h4l-5-5z"/></svg>
TRÁMITES LEGALES</div>
          <span class="text-xs text-white">
            Asesoramiento y gestión de documentos legales para compra, venta y regularización de bienes inmuebles.
          </span>
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="/importaciones/" class="block p-3 rounded-lg hover:bg-slate-950 dark:hover:bg-gray-700">
          <div class="text-amber-400 font-bold flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M236.4 70.65L130.2 40.31a8 8 0 0 0-3.33-.23L21.74 55.1A16.08 16.08 0 0 0 8 70.94v114.12a16.08 16.08 0 0 0 13.74 15.84l105.13 15a8.5 8.5 0 0 0 1.13.1a8 8 0 0 0 2.2-.31l106.2-30.34A16.07 16.07 0 0 0 248 170V86a16.07 16.07 0 0 0-11.6-15.35M64 120H48a8 8 0 0 0 0 16h16v54.78l-40-5.72V70.94l40-5.72Zm56 78.78l-40-5.72V136h16a8 8 0 0 0 0-16H80V62.94l40-5.72Z"/></svg>
            IMPORTACIONES</div>
          <span class="text-xs text-white">
            Equipos especializados y tecnología de vanguardia para proyectos de construcción e infraestructura.
          </span>
        </a>
      </li>
      <li>
        <a href="/redcors/" class="block p-3 rounded-lg hover:bg-slate-950 dark:hover:bg-gray-700">
          <div class="text-amber-400 font-bold flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.504 7.501H7.5v10.003h10.003z"/><path fill="currentColor" d="M21.505 5.5v-2h-2v-2h-2.001v2h-2v-2h-2.001v2h-2v-2H9.501v2h-2v-2H5.5v2h-2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h2v2.001h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v-2h2.001v-2.001h-2v-2h2v-2.001h-2v-2h2V9.501h-2v-2h2V5.5zm-2 14.004H5.5V5.501h14.003z"/></svg>
            RED CORS</div>
          <span class="text-xs text-white">
            Acceso a correcciones GPS en tiempo real para posicionamiento preciso y confiable.
          </span>
        </a>
      </li>
        <li>
        <div class="block p-3 rounded-lg ">
          <div class="text-slate-400 font-bold flex flex-col lg:flex-row gap-2 items-start lg:items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.5 0H14a2.9 2.9 0 0 0-2.06.85L.5 12.29a1.71 1.71 0 0 0 0 2.42l8.79 8.79a1.71 1.71 0 0 0 2.42 0l11.44-11.44A2.9 2.9 0 0 0 24 10V1.5A1.5 1.5 0 0 0 22.5 0m-8.31 10.71c.56 2.09 1.09 4.07 0 5.2a2.83 2.83 0 0 1-4.06 0a.24.24 0 0 0-.35 0l-.78.78a1 1 0 0 1-.71.29a1 1 0 0 1-.71-1.7l.79-.79a.24.24 0 0 0 0-.35L7 12.79a1 1 0 0 1 1.41-1.41l3.12 3.12a.86.86 0 0 0 1.24 0c.32-.32-.24-2.39-.47-3.27c-.56-2.09-1.09-4.06 0-5.19a2.72 2.72 0 0 1 4.07 0a.24.24 0 0 0 .35 0l.78-.78a1 1 0 0 1 1.42 0a1 1 0 0 1 0 1.41l-.78.78a.24.24 0 0 0 0 .36l1.33 1.34a1 1 0 0 1 0 1.41a1 1 0 0 1-1.41 0L15 7.45a.76.76 0 0 0-1.24 0c-.36.32.24 2.38.43 3.26"/></svg>            INVERSIÓN INMOBILIARIA             <span class="text-white bg-slate-950 px-2 mb-2 lg:mb-0 lg:px-3 py-1 rounded-full flex justify-center items-center text-xs">Próximamente</span> 
</div>
          <span class="text-xs text-white">
            Oportunidades seguras y rentables para invertir en terrenos y proyectos urbanísticos con asesoría experta.
          </span>
        </div>
      </li>
    </ul>
   
    
  </div>
</div>
    </nav>


</template>

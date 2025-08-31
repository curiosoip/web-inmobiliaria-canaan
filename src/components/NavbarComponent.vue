<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const activeSection = ref("inicio")
const isMenuOpen = ref(false)

function scrollToSection(id) {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: "smooth" })
    }
    isMenuOpen.value = false // cierra menú móvil al hacer click
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
    <nav class="bg-emerald-700 border-b border-emerald-300/20 sticky w-full z-80 top-0 start-0">
        <div class="flex flex-wrap items-center justify-between mx-auto">

            <a href="/" class="px-4 lg:px-6 py-3 bg-slate-800 md:py-3 flex items-center justify-center md:justify-start">
                <div class="flex items-center space-x-3">
                    <img src="src/assets/logo.svg" alt="Canaan Inmobiliaria" class="w-20" />
                </div>
            </a>

            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse px-4">
                <button type="button"
                    class="text-slate-800 flex gap-2 justify-center items-center bg-yellow-500 cursor-pointer border-2 border-yellow-600 hover:text-slate-950 font-medium rounded-lg text-lg px-4 py-2 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path fill="currentColor"
                            d="M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm-5.99 4h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm2 2h2v2h-2zm-4 0h2v2h-2zm2-6h2v2h-2zm2 2h2v2h-2z" />
                    </svg>
                    Pagar
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

            <div :class="[
                'items-center justify-between bg-emerald-600 px-4 py-3 rounded-md w-full md:flex md:w-auto md:order-1 transition-all duration-300',
                isMenuOpen ? 'flex' : 'hidden'
            ]" id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-2 gap-3 font-medium md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <li>
                        <button @click="scrollToSection('inicio')" :class="[
                            'transition-all duration-300 cursor-pointer font-semibold text-sm tracking-wider uppercase',
                            activeSection === 'inicio' ? 'text-amber-300' : 'text-white hover:text-amber-300'
                        ]">
                            INICIO
                        </button>
                    </li>
                    <li>
                        <button @click="scrollToSection('servicios')" :class="[
                            'transition-all duration-300 cursor-pointer font-semibold text-sm tracking-wider uppercase',
                            activeSection === 'servicios' ? 'text-amber-300' : 'text-white hover:text-amber-300'
                        ]">
                            SERVICIOS
                        </button>
                    </li>
                    <li>
                        <button @click="scrollToSection('nosotros')" :class="[
                            'transition-all duration-300 cursor-pointer font-semibold text-sm tracking-wider uppercase',
                            activeSection === 'nosotros' ? 'text-amber-300' : 'text-white hover:text-amber-300'
                        ]">
                            NOSOTROS
                        </button>
                    </li>
                    <li>
                        <button @click="scrollToSection('contacto')" :class="[
                            'transition-all duration-300 cursor-pointer font-semibold text-sm tracking-wider uppercase',
                            activeSection === 'contacto' ? 'text-amber-300' : 'text-white hover:text-amber-300'
                        ]">
                            CONTACTO
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

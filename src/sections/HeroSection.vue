<template>
  <section id="inicio" class="relative h-screen overflow-hidden">
    <div class="absolute inset-0">
      <div class="relative w-full h-full bg-black">
        <video
          v-for="(slide, index) in slides"
          v-show="index === currentSlide"
          :key="slide.id"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          :poster="slide.poster"
          class="object-cover w-full h-full transition-all duration-1000"
        >
          <source :src="slide.video" type="video/mp4" />
          Tu navegador no soporta video en HTML5.
        </video>
        <div class="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/50 to-black/60"></div>
      </div>
    </div>

    <div class="relative z-10 flex items-center justify-center h-full pb-20 lg:mb-5">
      <div class="text-center text-white px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">
        <div class="mb-4 sm:mb-6">
          <span
            class="inline-block backdrop-blur-sm border border-amber-400/30 text-amber-100 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
          >
            ✨ CON LAS MEJORES CUOTAS DEL MERCADO
          </span>
        </div>

        <h1 class="font-bold mb-6 sm:mb-8">
          <span class="block text-3xl lg:text-6xl text-white">
            {{ slides[currentSlide].title }}
          </span>
          <span class="block text-3xl lg:text-6xl text-amber-400">
            {{ slides[currentSlide].subtitle }}
          </span>
        </h1>

       
        <div class="flex w-full justify-center items-center">
           <a href="#servicios" class="flex rounded-full p-4 text-white cursor-pointer hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z"/></svg>
          </a>
        </div>
       

      <div class="flex justify-center gap-3 mt-6">
        <span
          v-for="(slide, index) in slides"
          :key="slide.id"
          @click="currentSlide = index"
          :class="[
            'w-4 h-4 rounded-full cursor-pointer transition-all duration-300',
            currentSlide === index ? 'bg-amber-400 scale-125' : 'bg-gray-500/50'
          ]"
        ></span>
      </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import postervid from "../assets/imgs/welcome.jpg";
import postervid2 from "../assets/imgs/vid02.jpg";
import postervid3 from "../assets/imgs/vid03.jpg";

import welcomvid from "../assets/videos/welcome2.webm";
import vid02 from "../assets/videos/vid02.webm";
import vid03 from "../assets/videos/vid03.webm";
interface Slide {
  id: number;
  title: string;
  subtitle: string;
  video: string;
  poster:string;
}

const slides = ref<Slide[]>([
  { id: 1, title: "TE AYUDAMOS A", subtitle: "CONSTRUIR TU FUTURO", video:welcomvid,poster:postervid.src },
  { id: 2, title: "EL LUGAR QUE SUEÑAS", subtitle: "LISTO PARA TÍ", video: vid02,poster:postervid2.src },
  { id: 3, title: "HAZ REALIDAD", subtitle: "TU GRAN PROYECTO", video: vid03,poster:postervid3.src },
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

// autoplay cada 5s
onMounted(() => {
  setInterval(nextSlide, 5000);
});
</script>

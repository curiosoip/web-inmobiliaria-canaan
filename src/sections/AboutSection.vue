<template>
  <section id="nosotros" class="py-16 sm:py-20 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 sm:mb-6 tracking-tight"
        >
          SOBRE NOSOTROS
        </h2>
      </div>
      <div class="relative bg-white rounded-xl overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="relative h-full overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-transparent z-10"
            >
            </div>
            <img
              :src="currentImage.src"
              alt="Canaan Inmobiliaria"
              class="w-full h-full object-cover object-center scale-110 will-change-transform transform-gpu motion-safe:animate-[parallax_20s_linear_infinite]"
            />
            <div
              class="absolute bottom-2 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20"
            >
              <div
                class="flex w-full gap-1 flex-col lg:flex-row justify-center items-stretch"
              >
                <div
                  class="bg-amber-500 flex w-full h-full min-h-[50px] lg:min-h-[120px] flex-col justify-center items-center rounded-xl sm:rounded-2xl p-1 sm:p-6 text-center border border-white/20"
                >
                  <div class="text-4xl font-bold text-slate-800">300+</div>
                  <div class="text-xs sm:text-sm text-slate-800 font-bold">
                    Clientes Satisfechos
                  </div>
                </div>
                <div
                  class="bg-amber-500 flex w-full h-full min-h-[50px] lg:min-h-[120px] flex-col justify-center items-center rounded-xl sm:rounded-2xl p-1 sm:p-6 text-center border border-white/20"
                >
                  <div class="text-4xl font-bold text-slate-800">15+</div>
                  <div class="text-xs sm:text-sm text-slate-800 font-bold">
                    Años de experiencia
                  </div>
                </div>
                <div
                  class="bg-amber-500 flex w-full h-full min-h-[50px] lg:min-h-[120px] flex-col justify-center items-center rounded-xl sm:rounded-2xl p-1 sm:p-6 text-center border border-white/20"
                >
                  <div class="text-4xl font-bold text-slate-800">30+</div>
                  <div class="text-xs sm:text-sm text-slate-800 font-bold">
                    Profesionales Expertos
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-start items-center p-3 sm:p-8 lg:p-12 xl:p-16 relative"
          >
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul
                class="flex w-full lg:gap-2 -mb-px text-sm font-medium text-center"
                id="default-styled-tab"
                role="tablist"
              >
                <li class="me-1" role="presentation">
                  <button
                    class="inline-block p-1 lg:p-2 border-b-2 rounded-t-lg cursor-pointer font-semibold text-lg"
                    :class="activeTab === 0 ? 'text-amber-500 hover:text-amber-600 border-amber-600' : 'dark:border-transparent text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300'"
                    type="button"
                    role="tab"
                    @click="setActiveTab(0)"
                  >
                    <div class="flex gap-1 lg:gap-2">
                      <!-- SVG de Misión -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 128 128"
                      >
                        <!-- Contenido del SVG de Misión -->
                        <defs>
                          <path
                            id="SVGGSseceMg"
                            fill="#ffd8a1"
                            d="M114.59 96.18h-5.18s.04-63.41.04-74.11s-7.61-15.55-10.42-15.55h-76.9s10.1 1.21 10.23 15.55c.09 10.21 0 62.8 0 79.61s6.37 19.79 6.37 19.79h75.38c.07 0 .14-.01.21-.02c.09 0 .18.02.27.02c5.2 0 9.41-5.66 9.41-12.65c0-6.97-4.21-12.64-9.41-12.64"
                          ></path>
                        </defs>
                        <path fill="#d68b52" d="M22.13 18.65h23.19v15.08H22.13z"></path>
                        <ellipse cx="114.59" cy="108.83" fill="#f2bd72" rx="9.41" ry="12.65"></ellipse>
                        <use href="#SVGGSseceMg"></use>
                        <use href="#SVGGSseceMg"></use>
                        <path
                          fill="#f2bd72"
                          d="m32.26 100.75l.09-9.1s59.53 6.46 77.04-14.12v22.99z"
                        ></path>
                        <g opacity="0.6">
                          <path
                            fill="none"
                            stroke="#9e673c"
                            stroke-linecap="round"
                            stroke-miterlimit="10"
                            stroke-width="3.005"
                            d="M45.52 30.1c1.17 0 2.35-.02 3.52 0c.89.02 1.72.14 2.63.05c.98-.10 1.96-.29 2.96-.26c1.22.04 2.39.41 3.62.41c.60 0 1.14-.17 1.73-.20c.68-.03 1.36 0 2.04 0h4.30m12.69 0c.73 0 1.49.06 2.21-.05c1.12-.17 2.19-.63 3.36-.53c1.25.11 2.31.84 3.54 1.03c1.99.29 3.86-.90 5.87-1.09c.64-.06 1.28-.02 1.92.03c1.45.12 2.88.30 4.31.53m-54.70 23.49c1 0 2.04.10 3.03 0c1.39-.14 2.73-.63 4.16-.56c1.44.07 2.76.70 4.17.95c1.94.33 3.89-.08 5.81-.33c2.05-.27 4-.05 6.06-.05h7.70m10.32-.01c.74 0 1.48-.01 2.22 0c1.25.02 2.18-.38 3.37-.61c1.69-.33 3.38.19 5.05.36c1.23.12 2.52.26 3.75.25m-32.60 23.45c1.34 0 2.74-.09 4.05.09c2.27.32 4.18-.39 6.41-.62c2.09-.22 4.18.20 6.28.37c2.18.18 4.37.10 6.56.02c2.27-.08 4.54.13 6.83.13m-54.11.01c1.96 0 3.89.37 5.85.23c.66-.05 1.32-.14 1.99-.17c1.33-.07 2.67.23 3.98.08c.87-.10 1.70-.14 2.58-.14m9.58-58.48c1.34 0 2.74-.09 4.05.09c2.27.32 4.18-.39 6.41-.62c2.09-.22 4.18.20 6.28.37c2.18.18 4.37.10 6.56.02c2.27-.08 4.54.13 6.83.13m-54.11.01c1.96 0 3.89.37 5.85.23c.66-.05 1.32-.14 1.99-.17c1.33-.07 2.67.23 3.98.08c.87-.10 1.70-.14 2.58-.14M45.52 41.87c.96 0 1.89.04 2.83.11c1.68.12 3.24-.64 4.87-.81c2.05-.21 4.07.45 6.10.75c2.01.30 4.05.12 6.07 0c.92-.06 1.88-.14 2.80-.12c.99.02 1.93.33 2.92.32c1.27-.01 2.44-.57 3.69-.76c2.78-.43 5.55.97 8.36.78c.92-.06 1.81-.29 2.72-.38c1.12-.11 2.25-.01 3.37.09l4.98.45M45.52 65.26c.96 0 1.89.04 2.83.11c1.68.12 3.24-.64 4.87-.81c2.05-.21 4.07.45 6.10.75c2.01.30 4.05.12 6.07 0c.92-.06 1.88-.14 2.80-.12c.99.02 1.93.33 2.92.32c1.27-.01 2.44-.57 3.69-.76c2.78-.43 5.55.97 8.36.78c.92-.06 1.81-.29 2.72-.38c1.12-.11 2.25-.01 3.37.09l4.98.45M58.39 88.62c.52.01.99-.11 1.50-.13c.74-.04 1.47.17 2.20.28c1.75.26 3.58.39 5.32.01c.98-.22 1.91-.59 2.91-.73c2.51-.36 4.99.76 7.54.75c2.20-.02 4.56-1.02 6.73-.44c1.42.37 2.88.28 4.38.28"
                            opacity="0.77"
                          ></path>
                        </g>
                        <path
                          fill="#fcebcd"
                          d="M38.25 96.18v6.17h84.41c-1.64-3.69-4.64-6.17-8.07-6.17z"
                        ></path>
                        <ellipse cx="38.73" cy="108.83" fill="#f2bd72" rx="9.41" ry="12.65"></ellipse>
                        <path
                          fill="#784d30"
                          d="M45.71 108.17c0 5.33-3.34 8.35-6.92 9.33c-4.61 1.26-6.53.16-6.53.16V98.68s3.25-.82 6.72.16c3.54.99 6.73 4 6.73 9.33"
                        ></path>
                        <ellipse cx="33.48" cy="108.17" fill="#784d30" rx="6.72" ry="9.65"></ellipse>
                        <ellipse cx="33.48" cy="108.18" fill="#784d30" rx="6.72" ry="9.65"></ellipse>
                        <ellipse cx="24.86" cy="108.18" fill="#ba793e" rx="4.46" ry="4.50"></ellipse>
                        <path
                          fill="#ba793e"
                          d="M33.02 105.44c1.27.39 2.82 3.08.18 5.66c-.67.65.02 2.09.48 3.30c.58 1.54 1 2.37 2.34 1.45c1.80-1.22 3.51-4.71 3.51-7.67c0-4.79-2.71-8.68-6.05-8.68c-1.72 0-3.06.55-4.19 2.88c-.50 1.04-.55 2.37 1.04 2.53c0 .01 1.78.26 2.69.53"
                        ></path>
                        <ellipse cx="22.34" cy="20.09" fill="#f2bd72" rx="10.09" ry="13.57"></ellipse>
                        <path
                          fill="#784d30"
                          d="M29.32 19.43c0 5.33-3.34 8.35-6.92 9.33c-4.61 1.26-6.53.16-6.53.16V9.94s3.25-.82 6.72.16c3.53.98 6.73 4 6.73 9.33"
                        ></path>
                        <ellipse cx="17.09" cy="19.43" fill="#784d30" rx="6.72" ry="9.65"></ellipse>
                        <ellipse cx="17.09" cy="19.44" fill="#784d30" rx="6.72" ry="9.65"></ellipse>
                        <ellipse cx="8.46" cy="19.44" fill="#ba793e" rx="4.46" ry="4.50"></ellipse>
                        <path
                          fill="#ba793e"
                          d="M16.62 16.70c1.27.39 2.82 3.08.18 5.66c-.67.65.02 2.09.48 3.30c.58 1.54 1 2.37 2.34 1.45c1.80-1.22 3.51-4.71 3.51-7.67c0-4.79-2.71-8.68-6.05-8.68c-1.72 0-3.06.55-4.19 2.88c-.50 1.04-.55 2.37 1.04 2.53c0 .01 1.79.25 2.69.53"
                        ></path>
                      </svg>
                      MISIÓN
                    </div>
                  </button>
                </li>
                <li class="me-1" role="presentation">
                  <button
                    class="inline-block p-1 lg:p-2 text-lg font-semibold border-b-2 cursor-pointer rounded-t-md"
                    :class="activeTab === 1 ? 'text-amber-500 hover:text-amber-600 border-amber-600' : 'dark:border-transparent text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300'"
                    type="button"
                    role="tab"
                    @click="setActiveTab(1)"
                  >
                    <div class="flex gap-1 lg:gap-2">
                      <!-- SVG de Visión -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 128 128"
                      >
                        <!-- Contenido del SVG de Visión -->
                        <radialGradient
                          id="SVGsjmRLc0D"
                          cx="43.972"
                          cy="29.066"
                          r="90.951"
                          gradientTransform="matrix(.6257 .78 -.5815 .4665 33.359 -18.792)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".506" stop-color="#17a1f3"></stop>
                          <stop offset=".767" stop-color="#1b7ffa"></stop>
                          <stop offset=".962" stop-color="#1366f0"></stop>
                          <stop offset="1" stop-color="#1160ee"></stop>
                        </radialGradient>
                        <path
                          fill="url(#SVGsjmRLc0D)"
                          d="M3.14 64.68c.68 24.40 16.99 59.55 61.45 59.10c43.32-.44 60.76-36.30 59.40-62.06c-1.37-25.76-21.66-57.46-61.79-57.23c-40.14.22-59.80 33.96-59.06 60.19"
                        ></path>
                        <path
                          fill="#fff"
                          d="M63.03 4.48s-.45 1.27 2.17 2.07s4.01.85 5.88 1.71c1.87.85 2.99 2.19 5.66 3.58s3.58 1.71 4.06.75c.22-.43-.69-2.35-.69-2.35s.43-1.82-.21-2.46c-.54-.54-3.52-1.75-4.59-2.18c-1.00-.40-4.59-.84-6.31-.95c-4.22-.26-5.97-.17-5.97-.17"
                        ></path>
                        <path
                          fill="#7add8a"
                          d="M49.06 49.80c.09.23.65 1.37 1.77 1.68s4.08.37 4.79.65c.72.28 2.46 1.18 2.93 1.46s2.30 1.82 2.74 1.96c1.03.34 1.62-.28 2.09-.12s.75 1.06 1.68 1.12c.56.04 1.28-.87 1.81-.97s3.24.12 3.30-.75s-1.84-2.68-2.96-2.68c-.94 0-1.09.81-1.81.84s-1.18-.75-2.02-.72s-1.28.75-1.74.53c-.47-.22-5.48-3.67-6.79-4.05c-1.31-.37-4.73.09-5.20.22c-.46.15-.74.43-.59.83"
                        ></path>
                        <path
                          fill="#7add8a"
                          d="M27.19 21.25c.75-1.82 1.93-4.57 3.53-6.34c1.61-1.77 4.36-4.23 4.36-4.23s4.90-2.57 12.29-4.49s14.54-1.70 14.54-1.70s-.62.58-.57.90s.05.86 1.34 1.34c1.28.48 3.85.80 4.55 1.61c.70.80.91 1.87.11 2.41s-2.25.37-3.64-.05c-1.39-.43-1.34-.48-1.50-.96s1.39-.70 1.18-1.18s-.91-.27-1.71-.70s-1.38-.53-1.88-.32s-.99 1.27-1.21 1.80s-.34.71-.56.87s-1.58.09-1.95.12s-1.83.71-2.69 1.11c-.87.40-2.69.84-3.10 1.18c-.40.34-.77.90-.09 1.33s2.20.87 3.10 1.18s2.48.34 2.69.62c.22.28.03 1.58.19 1.77c.15.19.74.96 1.11.90s.90-1.49 1.11-1.92c.22-.43 1.70-.93 1.58-1.61s-.81-.81-.84-1.21s.46-1.24.43-1.46s.03-1.46.68-1.58s1.55.37 2.29.62s1.49-.03 2.63.74c1.15.77.90 1.36 1.46 1.39s.59-.90 1.33-1.02s2.14 1.27 3.90 2.32s4.15 2.51 4.86 3.53s.46 1.27 1.02 1.64s2.42 1.39 2.51 1.83c.09.43-.03 1.02-1.86.90s-2.60-.59-3.04-1.05c-.43-.46-.46-.90-.34-1.18s.62-.31.62-.31s.28-1.15-.46-1.49s-1.46-.56-3.75-.19s-3.84.90-4.15 1.39c-.31.50-.03 1.11.37 1.11s1.86-.84 2.38-.68c.53.15 0 1.86.40 2.11s1.61.12 2.26.15s1.33-.06 1.67.46s-.59 1.02-1.46 1.39s-2.14 1.21-2.51 1.52s-.99.59-1.24.06s.03-1.52.03-1.52s-2.11.84-2.45 1.24s.19 1.64-.50 2.29c-.68.65-1.89.15-2.51.43s-1.70 1.33-2.42 2.20c-.71.87-1.08 1.33-1.08 1.95s.68 1.24-.43 2.17s-1.70.71-2.69 1.18c-.99.46-2.48 1.33-3.07 2.63s.15 3.90.28 4.80c.12.90.56 2.91-.46 2.94s-1.15-.62-1.89-2.63s-1.02-2.91-1.58-3.19s-1.27-.03-2.51.12s-6.23.37-7.25.37s-2.32-.31-3.47 1.18s-1.05 2.32-1.08 3.44s-.40 1.46-.93 2.42s-.68 3.62-.50 4.06c.19.43 1.77 2.17 2.04 2.17c.28 0 2.85.12 3.28-.03s.93-.77 1.18-1.39s.15-1.15.84-1.83s1.61-.59 2.20-.62s1.05-.15 1.58-.22c.53-.06 1.33.74 1.30 1.02s-1.18 1.46-1.49 2.11l-.31.65s-.22.99-.50 1.42s-.50.87-.74 1.18c-.25.31-.09.90.43 1.02c.53.12.43-.28.62-.37s3.16-.03 3.78.03s1.55.96 1.64 1.27s.12 2.14-.22 3.07s-.90 1.42-.96 1.77c-.06.34.09.87.09.87s.46.87 1.15 1.52c.68.65 1.42 1.05 1.42 1.05s1.58 0 2.42-.03s1.42-.15 1.98.25s1.55 1.58 1.77 1.55s.53-1.24 2.26-2.63s2.42-1.55 3.44-1.70s1.21.31 1.21.31s.46.40 1.27.06s.71-.84 1.95-.77s2.01.74 2.85.96s2.42.34 4.09.43s2.69-.15 3.31-.06s1.15.81 1.49 1.11c.34.31.34.81.34.81s.65.15 1.27.59c.62.43 1.21 1.52 1.98 1.83s2.17.15 3.81.25c1.64.09 2.11.28 2.94 1.08s1.33 1.86 1.64 2.76s.77 2.97.77 2.97s1.21-.37 3.10.40s2.04 1.55 2.04 1.55s2.94-.09 3.75-.06s2.91 1.46 3.13 1.95c.22.50-.22 4.31-.15 4.89c.06.59-2.17 3.78-2.73 4.31s-.93 1.15-1.80 3.62s-1.49 4.12-1.95 4.58s-1.92 2.20-3.44 2.94s-2.42.62-3.44 1.11c-1.02.50-1.80 2.11-2.29 3.22c-.50 1.11-.19 2.48-.46 2.91c-.28.43-3.84 3.93-4.52 4.15s-3.87-.34-4.40.09s.65 1.67.53 2.08c-.12.40-1.15 1.49-2.04 2.17c-.90.68-1.67 1.67-2.29 1.77c-.62.09-1.39-.34-2.01.37s.06 1.86-.22 2.35c-.28.50-.92.95-1.29 1.63s-.64.92-.64.92s-2.82.25-4.50.34c-1.67.09-5.06.05-5.06.05s.76-1.49.86-2.98s-.37-2.29-.06-3.16s1.30-1.89 1.30-1.89s.71-3.41.65-5.73s-.34-3.69-.37-4.12s.22-8.11.09-8.58c-.12-.46-1.77-1.33-2.57-2.04c-.81-.71-3-1.67-3.59-2.57s-.74-1.24-.96-1.58s-1.89-3.34-2.29-4.12c-.40-.77-1.39-1.46-1.80-2.54s-.40-1.98-.09-2.32s.81-.62.71-1.02c-.09-.40-.99-.46-.68-1.77s1.39-2.48 1.67-2.73s.50.03.77-.22c.28-.25 2.01-1.73 2.23-2.01s.15-2.26-.15-3.10c-.31-.84-1.55-2.20-2.01-2.35s-1.58 1.15-2.57 1.11c-.99-.03-1.64 0-3.19-.99s-3.72-2.91-4.18-3.72s-.28-1.11-.56-1.55c-.28-.43-1.73-1.21-2.54-1.61s-1.64-.28-2.11-.59s-2.73-2.82-3.16-3.34c-.43-.53-.81-.68-1.11-.71s-.59.40-.84.46s-2.26.09-2.57-.06s-2.73-1.39-3.93-2.51s-2.73-1.89-3.41-2.82s.03-1.92.12-2.42s-.03-2.35-.09-3s-1.18-1.83-1.33-3.13s-.59-2.60-.71-3.22s-.06-2.79-.22-2.91c-.15-.12-.93-.43-1.11.93s.25 2.38.34 3.93s.09 2.48.31 2.94s.96 1.42.37 1.73s-1.36-.34-1.80-1.21c-.43-.87-.09-2.51-.46-3.31s-.50-2.38-.59-3.16c-.09-.77-.43-2.73-.34-4.43s.62-1.86.62-1.86s0-1.98.03-2.38s2.01-4.12 3.62-6.19c1.65-2.05 2.83-3.66 2.83-3.66"
                        ></path>
                        <radialGradient
                          id="SVG2lDcAYop"
                          cx="4.93"
                          cy="38.972"
                          r="40.299"
                          gradientTransform="matrix(.9806 -.1961 .1182 .5911 -4.511 16.902)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".344" stop-color="#e3dda6"></stop>
                          <stop offset=".996" stop-color="#e3dda6" stop-opacity="0"></stop>
                        </radialGradient>
                        <path
                          fill="url(#SVG2lDcAYop)"
                          d="M41.62 56.63c.16-2.52-1.21-2.67-1.64-2.52s-3 .03-3.28.03s-1.86-1.73-2.04-2.17c-.19-.43-.03-3.10.50-4.06s.90-1.30.93-2.42s-.06-1.95 1.08-3.44c1.15-1.49 2.45-1.18 3.47-1.18s6.01-.22 7.25-.37s1.95-.40 2.51-.12s.84 1.18 1.58 3.19s.87 2.66 1.89 2.63s.59-2.04.46-2.94c-.12-.90-.87-3.50-.28-4.80s2.08-2.17 3.07-2.63s1.58-.25 2.69-1.18s.43-1.55.43-2.17s.37-1.08 1.08-1.95s1.80-1.92 2.42-2.20s1.83.22 2.51-.43s.15-1.89.50-2.29c.34-.40 2.45-1.24 2.45-1.24s-.28.99-.03 1.52s.87.25 1.24-.06s1.64-1.15 2.51-1.52s1.80-.87 1.46-1.39s-1.02-.43-1.67-.46s-1.86.09-2.26-.15c-.40-.25.12-1.95-.40-2.11c-.53-.15-1.98.68-2.38.68s-.68-.62-.37-1.11c.31-.50-9.63-1.42-10-1.36s-.96-.71-1.11-.90s.03-1.49-.19-1.77s-1.80-.31-2.69-.62c-.90-.31-2.42-.74-3.10-1.18s-.31-.99.09-1.33s2.23-.77 3.10-1.18c.87-.40 2.32-1.08 2.69-1.11s1.73.03 1.95-.12s.34-.34.56-.87s.71-1.58 1.21-1.80s1.61-1.82 1.56-2.14s.57-.90.57-.90s-7.15-.23-14.54 1.70s-12.29 4.49-12.29 4.49s-2.75 2.46-4.36 4.23s-2.78 4.52-3.53 6.34c0 0-1.18 1.61-2.79 3.69s-3.59 5.79-3.62 6.19s-.03 2.38-.03 2.38s-.53.15-.62 1.86c-.09 1.70.25 3.65.34 4.43c.09.77.22 2.35.59 3.16s.03 2.45.46 3.31c.43.87 1.21 1.52 1.80 1.21s-.15-1.27-.37-1.73s-.22-1.39-.31-2.94s-.53-2.57-.34-3.93s.96-1.05 1.11-.93s.09 2.29.22 2.91c.12.62.56 1.92.71 3.22s1.27 2.48 1.33 3.13s.19 2.51.09 3c-.09.50-.81 1.49-.12 2.42c.68.93 2.20 1.70 3.41 2.82s3.62 2.35 3.93 2.51c.31.15 2.32.12 2.57.06s.53-.50.84-.46s1.62 1.14 2.17 1.05c.95-.17 2.91-.12 3.03-1.98"
                        ></path>
                        <radialGradient
                          id="SVGdlCCTdZI"
                          cx="42.188"
                          cy="107.573"
                          r="31.591"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".723" stop-color="#e3dda6"></stop>
                          <stop offset="1" stop-color="#e3dda6" stop-opacity="0"></stop>
                        </radialGradient>
                        <path
                          fill="url(#SVGdlCCTdZI)"
                          d="M57.83 71.27c.12.88.37 2.82.15 3.10s-1.95 1.77-2.23 2.01c-.28.25-.50-.03-.77.22c-.28.25-1.36 1.42-1.67 2.73s.59 1.36.68 1.77s-.4.68-.71 1.02s-.31 1.24.09 2.32s1.39 1.77 1.80 2.54c.40.77 2.08 3.78 2.29 4.12c.22.34.37.68.96 1.58s2.79 1.86 3.59 2.57c.81.71 2.45 1.58 2.57 2.04s-.12 8.15-.09 8.58s.31 1.80.37 4.12s-.65 5.73-.65 5.73s-.99 1.02-1.30 1.89s.15 1.67.06 3.16s-.86 2.98-.86 2.98s3.38.04 5.06-.05c1.67-.09 4.50-.34 4.50-.34s.27-.24.64-.92s1.01-1.13 1.29-1.63s-.40-1.64.22-2.35s1.39-.28 2.01-.37s1.39-1.08 2.29-1.77c.90-.68 1.92-1.77 2.04-2.17s-1.05-1.64-.53-2.08c.53-.43 3.72.12 4.40-.09c.68-.22 4.24-3.72 4.52-4.15s-.03-1.80.46-2.91c.50-1.11.83-18.84-4.46-26.54c-6.19-9.02-27.31-11.65-26.72-7.11"
                        ></path>
                        <radialGradient
                          id="SVGH2EYQc8n"
                          cx="62.919"
                          cy="134.216"
                          r="22.682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".403" stop-color="#e3dda6"></stop>
                          <stop offset="1" stop-color="#e3dda6" stop-opacity="0"></stop>
                        </radialGradient>
                        <path
                          fill="url(#SVGH2EYQc8n)"
                          d="M57.85 71.31c.12.88.37 2.82.15 3.10s-1.95 1.77-2.23 2.01c-.28.25-.50-.03-.77.22c-.28.25-1.36 1.42-1.67 2.73s.59 1.36.68 1.77s-.4.68-.71 1.02s-.31 1.24.09 2.32s1.39 1.77 1.80 2.54c.40.77 2.08 3.78 2.29 4.12s.37.68.96 1.58s2.79 1.86 3.59 2.57c.81.71 2.45 1.58 2.57 2.04s-.12 8.15-.09 8.58s.31 1.80.37 4.12s-.65 5.73-.65 5.73s-.99 1.02-1.30 1.89s.15 1.67.06 3.16s-.86 2.98-.86 2.98s3.38.04 5.06-.05c1.67-.09 4.50-.34 4.50-.34s.27-.24.64-.92s1.01-1.13 1.29-1.63s-.40-1.64.22-2.35s1.39-.28 2.01-.37s1.39-1.08 2.29-1.77c.90-.68 1.92-1.77 2.04-2.17s-1.05-1.64-.53-2.08s3.72.12 4.40-.09c.68-.22 4.24-3.72 4.52-4.15s-.03-1.80.46-2.91c.50-1.11.83-18.84-4.46-26.54c-6.20-9.03-27.32-11.65-26.72-7.11"
                        ></path>
                        <path
                          fill="#4b9eec"
                          d="M47.21 22.14c.28.38 1.55-.08 2.15-.05s1.25.27 1.33.82c.08.54-.52.63-.87 1.33c-.18.36-1.39 2.79-.73 3.07c.87.38 1.3-.49 1.49-.90s.65-1.28.65-1.28s.52-1.14 1.20-1.06c1.22.14.73 1.88.73 1.88s-.27 1.30.38 1.60s1.28.08 1.63-.05c.35-.14.95 0 1.66-.30s1.01-.57 1.49-.76c.49-.19.92-.08.98-.52c.05-.43-.38-.87-1.11-.92s-1.63.79-1.93 1.06s-1.28.46-1.39-.24s.52-.76.98-1.03s.76-.65.76-.65s-.84-1.09-1.09-1.17c-.24-.08-1.22.22-2.20-.46c-.91-.63-1.28-1.49-1.52-1.71s-1.33-.57-2.39-.35s-2.64 1.09-2.20 1.69"
                        ></path>
                      </svg>
                      VISIÓN
                    </div>
                  </button>
                </li>
                <li class="me-1" role="presentation">
                  <button
                    class="inline-block p-1 lg:p-2 text-lg font-semibold border-b-2 cursor-pointer rounded-t-md"
                    :class="activeTab === 2 ? 'text-amber-500 hover:text-amber-600 border-amber-600' : 'dark:border-transparent text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300'"
                    type="button"
                    role="tab"
                    @click="setActiveTab(2)"
                  >
                    <div class="flex gap-1 lg:gap-2">
                      <!-- SVG de Valores -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 32 32"
                      >
                        <g fill="none">
                          <path
                            fill="#9b9b9b"
                            d="M17.651 22.27h-3.89c-.79 0-1.44.64-1.43 1.43v3.89c0 .79.64 1.43 1.43 1.43h.248a1.94 1.94 0 0 0 3.384 0h.258c.79 0 1.43-.64 1.43-1.43V23.7c0-.79-.64-1.43-1.43-1.43"
                          ></path>
                          <path
                            fill="#fcd53f"
                            d="M18.161 23.13c.24 0 .43-.18.45-.41c.07-.86.44-2.95 2.46-5.19a8.66 8.66 0 0 0 3.29-6.31c.02-.24.03-.40.03-.50v-.10c-.06-4.78-3.93-8.62-8.70-8.62a8.69 8.69 0 0 0-8.69 8.60s-.01.24.03.64c.16 2.54 1.40 4.79 3.29 6.28c2.02 2.25 2.42 4.34 2.49 5.20c.02.23.21.41.45.41z"
                          ></path>
                          <path
                            fill="#ffb02e"
                            d="M15.701 10.70c1.62 0 2.94 1.31 2.96 2.93v.08c0 .03 0 .07-.01.13c-.05.84-.46 1.63-1.12 2.15l-.07.05l-.06.06c-1.10 1.22-1.33 4.32-1.37 6.02h-.65c-.05-1.70-.29-4.80-1.39-6.02l-.06-.06l-.07-.05a2.96 2.96 0 0 1-1.12-2.17c0-.04-.01-.07-.01-.09v-.09c.03-1.62 1.36-2.94 2.97-2.94m0-1a3.96 3.96 0 0 0-2.45 7.07c1.20 1.34 1.14 6.36 1.14 6.36h2.64s-.08-5.02 1.13-6.35c.86-.68 1.43-1.71 1.50-2.88c.01-.11.01-.18.01-.23v-.04a3.97 3.97 0 0 0-3.97-3.93"
                          ></path>
                          <path
                            fill="#d3d3d3"
                            d="M19.167 25.053a.5.5 0 1 0-.172-.986l-6.74 1.18a.5.5 0 1 0 .172.986zm-.05 2.15a.5.5 0 0 0-.172-.985l-6.65 1.17a.5.5 0 1 0 .173.984z"
                          ></path>
                          <path
                            fill="#fff478"
                            d="M13.791 5.44c-1.11 1.92-.55 4.32 1.25 5.35s4.15.32 5.26-1.60s.55-4.32-1.25-5.35s-4.15-.32-5.26 1.60"
                          ></path>
                        </g>
                      </svg>
                      VALORES
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div id="default-styled-tab-content">
              <div
                class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                :class="{ 'hidden': activeTab !== 0 }"
                role="tabpanel"
              >
                <p class="text-lg text-gray-500 dark:text-gray-400">
                  Brindar soluciones integrales en bienes raíces, construcción,
                  consultoría, importación y servicios tecnológicos, ofreciendo
                  productos y proyectos de alta calidad que satisfagan las
                  necesidades de nuestros clientes, impulsando el desarrollo
                  sostenible y generando valor en cada etapa de nuestros
                  servicios.
                </p>
                <img
                  :src="misionimg.src"
                  alt="Canaan Inmobiliaria"
                  class="w-full h-40 rounded-lg mt-2 object-cover object-center"
                />
              </div>
              <div
                class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                :class="{ 'hidden': activeTab !== 1 }"
                role="tabpanel"
              >
                <p class="text-lg text-gray-500 dark:text-gray-400">
                  Ser una empresa líder y referente a nivel nacional e
                  internacional, reconocida por la innovación, la excelencia en la
                  ejecución y la confianza que brindamos en los sectores
                  inmobiliario, de construcción, comercio e infraestructura
                  tecnológica, contribuyendo al crecimiento económico y social de
                  las comunidades donde operamos.
                </p>
                <div
                  class="flex mt-2 w-full justify-center items-center bg-cover p-2"
                >
                  <img
                    :src="visionimg.src"
                    alt="Canaan Inmobiliaria"
                    class="w-full h-34 rounded-lg mt-2 object-cover object-center"
                  />
                </div>
              </div>
              <div
                class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                :class="{ 'hidden': activeTab !== 2 }"
                role="tabpanel"
              >
                <ValoresComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import misionimg from "/src/assets/imgs/08.jpg"
import visionimg from "/src/assets/imgs/02.jpg"
import mision from "/src/assets/imgs/mision.jpg"
import vision from "/src/assets/imgs/vision.jpg"
import valores from "/src/assets/imgs/valores.jpg"
import ValoresComponent from "../components/ValoresComponent.vue"

const slideImages = [mision, vision, valores]
const activeTab = ref(0)

const currentImage = computed(() => {
  if (activeTab.value >= 0 && activeTab.value < slideImages.length) {
    return slideImages[activeTab.value]
  }
  return slideImages[0]
})

function setActiveTab(tabIndex: number) {
  activeTab.value = tabIndex
}
</script>
<script setup>
const props = defineProps({
  personal: { type: Object, required: true }
})
</script>

<template>
  <section
    id="about"
    class="pt-32 pb-20 px-4"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 text-center md:text-left">
          <div class="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Available for opportunities
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{{ personal.name }}</span>
          </h1>
          <p class="text-2xl text-slate-600 dark:text-slate-300 mb-6">
            {{ personal.title }}
          </p>
          <p class="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-xl">
            {{ personal.summary }}
          </p>
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              :href="personal.linkedin"
              target="_blank"
              class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              ><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              LinkedIn
            </a>
            <a
              :href="'mailto:' + personal.email"
              class="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-medium border-2 border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              /></svg>
              Email Me
            </a>
          </div>
        </div>
        <div class="flex-shrink-0">
          <div class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <img src="../assets/dony-foto.jpeg" alt="Dony" class="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

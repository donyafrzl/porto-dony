<script setup>
import { ref } from 'vue'

const props = defineProps({
  projectCategories: { type: Array, required: true }
})

const selectedCategory = ref(0)
const hoveredCategory = ref(null)
</script>

<template>
  <section
    id="projects"
    class="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900"
  >
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
        QA <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
      </h2>
      <p class="text-slate-500 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
        Key projects and testing areas covered during my tenure at Kompas.id
      </p>
      
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <button
          v-for="(cat, index) in projectCategories"
          :key="index"
          :class="[
            'px-5 py-2.5 rounded-xl font-medium transition-all duration-200',
            selectedCategory === index
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
              : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600'
          ]"
          @click="selectedCategory = index"
          @mouseenter="hoveredCategory = index"
          @mouseleave="hoveredCategory = null"
        >
          <span class="mr-2">{{ cat.icon }}</span>{{ cat.name }}
        </button>
      </div>

      <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 min-h-[200px]">
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
          <span class="text-3xl">{{ projectCategories[selectedCategory].icon }}</span>
          {{ projectCategories[selectedCategory].name }}
        </h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div
            v-for="(project, i) in projectCategories[selectedCategory].projects"
            :key="i"
            class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
          >
            <span class="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
            <span class="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{{ project }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

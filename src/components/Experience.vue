<script setup>
import { ref } from 'vue'

const props = defineProps({
  experiences: { type: Array, required: true }
})

const hoveredExp = ref(null)
</script>

<template>
  <section
    id="experience"
    class="py-20 px-4 bg-white"
  >
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
        Work <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
      </h2>
      <div class="space-y-8">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          :class="[
            'group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 transition-all duration-300',
            hoveredExp === index ? 'shadow-xl shadow-blue-500/10 border-blue-200 -translate-y-1' : 'shadow-sm'
          ]"
          @mouseenter="hoveredExp = index"
          @mouseleave="hoveredExp = null"
        >
          <div class="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-slate-900">
                {{ exp.role }}
              </h3>
              <p class="text-blue-600 font-medium">
                {{ exp.company }}
              </p>
            </div>
            <span class="text-slate-500 text-sm mt-2 md:mt-0">{{ exp.period }}</span>
          </div>
          <ul class="space-y-2 mb-4">
            <li
              v-for="(point, i) in exp.points"
              :key="i"
              class="flex items-start gap-3 text-slate-600"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
              <span>{{ point }}</span>
            </li>
          </ul>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in exp.tech"
              :key="tech"
              class="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

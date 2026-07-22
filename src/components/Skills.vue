<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  skills: { type: Array, required: true }
})

const filterSkill = ref('')

const filteredSkills = computed(() => {
  if (!filterSkill.value) return props.skills
  return props.skills.filter(s => s.toLowerCase().includes(filterSkill.value.toLowerCase()))
})
</script>

<template>
  <section
    id="skills"
    class="py-20 px-4 bg-white dark:bg-slate-900"
  >
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
        Skills & <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technologies</span>
      </h2>
      <p class="text-slate-500 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
        Tools and technologies I've worked with
      </p>
      
      <div class="max-w-md mx-auto mb-10">
        <input
          v-model="filterSkill"
          type="text"
          placeholder="Search skills..."
          class="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        >
      </div>

      <div class="flex flex-wrap justify-center gap-3">
        <span
          v-for="skill in filteredSkills"
          :key="skill"
          class="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

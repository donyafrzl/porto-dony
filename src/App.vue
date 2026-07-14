<script setup>
import { personal, experiences, projectCategories, educations, organizations, skills } from './data.js'
import { ref } from 'vue'
import Hero from './components/Hero.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Education from './components/Education.vue'

const activeSection = ref('about')
const menuOpen = ref(false)

// Inisialisasi item navigasi
const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' }
]

function scrollTo(id) {
  activeSection.value = id
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div class="font-bold text-xl text-slate-800">
          {{ personal.name }}
        </div>
        <button
          class="md:hidden p-2 text-slate-600 hover:text-slate-900"
          @click="menuOpen = !menuOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div class="hidden md:flex gap-1">
          <button
            v-for="item in navItems"
            :key="item.id"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              activeSection === item.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            ]"
            @click="scrollTo(item.id)"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div
        v-if="menuOpen"
        class="md:hidden bg-white border-t border-slate-200 px-4 py-2"
      >
        <button
          v-for="item in navItems"
          :key="item.id"
          :class="[
            'block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all',
            activeSection === item.id
              ? 'bg-blue-600 text-white'
              : 'text-slate-600 hover:bg-slate-100'
          ]"
          @click="scrollTo(item.id)"
        >
          {{ item.label }}
        </button>
      </div>
    </nav>

    <Hero :personal="personal" />
    <Experience :experiences="experiences" />
    <Projects :project-categories="projectCategories" />
    <Skills :skills="skills" />
    <Education
      :educations="educations"
      :organizations="organizations"
    />

    <!-- Footer -->
    <footer class="py-12 px-4 bg-slate-900 text-white">
      <div class="max-w-6xl mx-auto text-center">
        <div class="text-2xl font-bold mb-4">
          {{ personal.name }}
        </div>
        <p class="text-slate-400 mb-6">
          {{ personal.title }}
        </p>
        <div class="flex justify-center gap-6 mb-8">
          <a
            :href="personal.linkedin"
            target="_blank"
            class="text-slate-400 hover:text-white transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            ><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
          <a
            :href="'mailto:' + personal.email"
            class="text-slate-400 hover:text-white transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            /></svg>
          </a>
        </div>
        <p class="text-slate-500 text-sm">
          {{ personal.location }} | {{ personal.phone }}
        </p>
      </div>
    </footer>
  </div>
</template>

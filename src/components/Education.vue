<script setup>
const props = defineProps({
  educations: { type: Array, required: true },
  organizations: { type: Array, required: true }
})
</script>

<template>
  <section
    id="education"
    class="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100"
  >
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
        Education & <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Organizations</span>
      </h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Education -->
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <svg
              class="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            /><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            /></svg>
            Education
          </h3>
          <div class="space-y-4">
            <div
              v-for="(edu, index) in educations"
              :key="index"
              class="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <h4 class="font-bold text-slate-900">
                {{ edu.degree }}
              </h4>
              <p class="text-blue-600">
                {{ edu.school }}
              </p>
              <p class="text-slate-500 text-sm mt-1">
                {{ edu.period }}
              </p>
            </div>
          </div>
        </div>

        <!-- Organizations -->
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <svg
              class="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            /></svg>
            Organizations
          </h3>
          <div class="space-y-4">
            <div
              v-for="(org, index) in organizations"
              :key="index"
              class="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-purple-200 transition-all"
            >
              <h4 class="font-bold text-slate-900">
                {{ org.role }}
              </h4>
              <p class="text-purple-600">
                {{ org.org }}
              </p>
              <p class="text-slate-500 text-sm mt-1">
                {{ org.period }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

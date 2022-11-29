<script setup lang="ts">
import Home from '../components/Home.vue'
import Article from '../components/Article.vue'
import NotFound from '../components/NotFound.vue'

import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'


const route = useRoute()
console.log(route)
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
const isNotFound = computed(() => route.component === NotFound)
</script>

<template>
  <div class="antialiased dark:bg-slate-900">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <div class="text-sm text-gray-500 dark:text-white leading-5">
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://github.com/vuejs/blog"
            target="_blank"
            rel="noopener"
            ><span class="hidden sm:inline">GitHub </span>Source</a
          >
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="isIndex" />
      <NotFound v-else-if="isNotFound" />
      <Article v-else />
    </main>
  </div>
</template>
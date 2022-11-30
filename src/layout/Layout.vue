<script setup lang="ts">
import Home from '../components/Home.vue'
</script>

<template>
  <div class="antialiased dark:bg-slate-900">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-end items-center py-10 font-bold">
        <div class="text-sm text-gray-500 dark:text-white leading-5">
          <a class="hover:text-gray-700 dark:hover:text-gray-200" href="https://github.com/lxz0510/liuxz-blog"
            target="_blank" rel="noopener"><span class="hidden sm:inline">GitHub </span>Source</a>
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <router-view></router-view>
    </main>
  </div>
</template>
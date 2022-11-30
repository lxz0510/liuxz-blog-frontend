<script setup lang="ts">
import { ref, computed, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Author from './Author.vue'
import { useFetch } from '@vueuse/core'
const router = useRouter()
const route = useRoute()

watchEffect(async () => {
  await useFetch(`http://localhost:8080/articles/${route.params.id}`)
})
const currentArticleId = computed(() => route.params.id)
const nextPost = computed(() => Number(currentArticleId.value) - 1)

const prevPost = computed(() => Number(currentArticleId.value) + 1)

const handlePostClick = (id: any) => {
  router.push({
    name: 'article',
    params: {
      id: id
    },
  })
}

</script>

<template>
  <Transition>
    <article class="xl:divide-y xl:divide-gray-200 dark:xl:divide-slate-200/5">
      <header class="pt-6 xl:pb-10 space-y-1 text-center">
        <h1 class="
          text-3xl
          leading-9
          font-extrabold
          text-gray-900 dark:text-white
          tracking-tight
          sm:text-4xl sm:leading-10
          md:text-5xl md:leading-14
        ">
          {{ " data.title" }}
        </h1>
      </header>

      <div class="
        divide-y
        xl:divide-y-0
        divide-gray-200 dark:divide-slate-200/5
        xl:grid xl:grid-cols-4 xl:gap-x-10
        pb-16
        xl:pb-20
      " style="grid-template-rows: auto 1fr">
        <Author />
        <div class="divide-y divide-gray-200 dark:divide-slate-200/5 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <!-- <Content class="prose dark:prose-invert max-w-none pt-10 pb-8" /> -->
        </div>

        <footer class="
          text-sm
          font-medium
          leading-5
          divide-y divide-gray-200 dark:divide-slate-200/5
          xl:col-start-1 xl:row-start-2
        ">
          <div class="py-8" v-if="nextPost">
            <h2 class="text-xs tracking-wide uppercase text-gray-500 dark:text-white"
              @click="handlePostClick(nextPost)">
              Next Article
            </h2>
          </div>
          <div class="py-8" v-if="prevPost">
            <h2 class="text-xs tracking-wide uppercase text-gray-500 dark:text-white"
              @click="handlePostClick(prevPost)">
              Previous Article
            </h2>
          </div>
          <div class="pt-8">
            <router-link class="link" to="/">← Back to the blog</router-link>
          </div>
        </footer>
      </div>
    </article>
  </Transition>
</template>
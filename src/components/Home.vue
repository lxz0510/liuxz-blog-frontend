<script setup lang="ts">
import { useFetch } from '@vueuse/core'
const { data } = useFetch("http://localhost:8080/articles/").json()
</script>

<template>
  <Transition>
    <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 class="
          text-3xl
          leading-9
          font-extrabold
          text-gray-900 dark:text-white
          tracking-tight
          sm:text-4xl sm:leading-10
          md:text-6xl md:leading-14
        ">
          {{ "Title" }}
        </h1>
        <p class="text-lg leading-7 text-gray-500 dark:text-white">subTitle</p>
      </div>
      <ul class="divide-y divide-gray-200 dark:divide-slate-200/5">
        <li class="py-12" v-for="{ title, content, ID, CreatedAt, description } of data">
          <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <div class="text-base leading-6 font-medium text-gray-500 dark:text-gray-300">
              {{ CreatedAt }}
            </div>
            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <h2 class="text-2xl leading-8 font-bold tracking-tight">
                  <router-link :to="{ name: 'article', params: { id: ID } }" class="text-gray-900 dark:text-white">{{
                      title
                  }}</router-link>
                </h2>
                <div class="prose dark:prose-invert max-w-none text-gray-500 dark:text-gray-300">{{ description }}</div>
              </div>
              <div class="text-base leading-6 font-medium">
                <router-link :to="{ name: 'article', params: { id: ID } }" class="text-gray-900 dark:text-white link">
                  Read
                  more →</router-link>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </Transition>
</template>
<script setup lang="ts">
  import NotFoundSVG from "@/assets/svgs/NotFound.vue"
</script>

<template>
  <div class="flex flex-col flex-1 items-center justify-around p-8">
    <NotFoundSVG class="max-w-2xl" />
    <div class="flex flex-col gap-4 text-center">
      <h1 class="text-gray-900 text-2xl">
        Oh no! It seems that the page you were trying to look for doesn't exist!
        <br />
        Please try again later or click the link below.
      </h1>
      <router-link class="link font-medium text-emerald-900" to="/">
        Return to homepage
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .link {
    &:hover {
      @apply text-emerald-800;
      @apply underline;
      text-underline-offset: 2px;
    }
    &::before {
      content: "\27F5";
    }
  }
</style>

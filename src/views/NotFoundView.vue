<script setup lang="ts">
  import NotFoundSVG from "@/assets/svgs/NotFound.vue"
  import PageTitle from "@/components/PageTitle.vue"
  import IconMdi from "@/components/IconMdi.vue"
  import { mdiChevronLeft } from "@mdi/js"
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-4 min-h-full text-primary text-center">
    <NotFoundSVG class="max-w-sm xl:max-w-2xl" />
    <div class="flex flex-col gap-4">
      <page-title>
        <div>
          Oh no! It seems that the page you were trying to look for doesn't
          exist!
        </div>
        <div>Please try again later or click the link below.</div>
      </page-title>
      <router-link
        class="link-primary link-animation self-center inline-flex items-center"
        to="/">
        <icon-mdi :icon="mdiChevronLeft" :size="28" />
        Return to homepage
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>

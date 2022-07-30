<script setup lang="ts">
  import FooterContributors from "./FooterContributors.vue"
</script>

<template>
  <footer
    class="flex flex-col items-center gap-4 bottom-0 w-full bg-primary py-6 px-2">
    <FooterContributors />
    <div class="text-accent text-sm">
      © 2022
      <a href="/" class="link-accent">KeyWorld™</a>
      . All Rights Reserved.
    </div>
  </footer>
</template>

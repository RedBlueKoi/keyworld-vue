<script setup lang="ts">
  import FooterContributors from "./FooterContributors.vue"
</script>

<template>
  <footer
    class="flex flex-col items-center gap-4 bottom-0 w-full bg-[#34495E] py-6 px-2">
    <FooterContributors />
    <div class="text-green-500 text-sm">
      © 2022
      <a href="https://keyworld.com/" class="hover:underline">KeyWorld™</a>
      . All Rights Reserved.
    </div>
  </footer>
</template>

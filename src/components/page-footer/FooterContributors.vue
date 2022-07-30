<script setup lang="ts">
  import { ref } from "vue"

  interface Contributor {
    name: string
    gitHubLink: string
  }

  const contributors = ref<Contributor[]>([
    {
      name: "Gaurav",
      gitHubLink: "https://github.com/GauravKnight"
    },
    {
      name: "John Paul Wile",
      gitHubLink: "https://github.com/Bots"
    },
    {
      name: "Janssenhidal",
      gitHubLink: "https://github.com/Janssenhidal"
    }
  ])
</script>

<template>
  <ul class="flex justify-center items-center flex-wrap gap-2 w-full">
    <li v-for="contributor in contributors" :key="contributor.gitHubLink">
      <a :href="contributor.gitHubLink" target="_blank" rel="nofollow">
        {{ contributor.name }}
      </a>
    </li>
  </ul>
</template>

<style scoped lang="postcss"></style>

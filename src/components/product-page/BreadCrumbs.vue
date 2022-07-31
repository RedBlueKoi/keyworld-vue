<script setup lang="ts">
  const props = defineProps<{ productName: string }>()
</script>

<template>
  <nav>
    <router-link class="link-primary link-animation" :to="{ name: 'home' }">
      Home
    </router-link>
    <router-link class="link-primary link-animation" :to="{ name: 'category' }">
      {{ $route.params.categoryName }}
    </router-link>
    <span>{{ productName }}</span>
  </nav>
</template>

<style scoped lang="postcss">
  a {
    &::after {
      content: " / ";
    }
  }
</style>

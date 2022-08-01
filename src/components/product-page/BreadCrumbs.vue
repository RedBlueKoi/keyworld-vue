<script setup lang="ts">
  defineProps<{ productName: string }>()
  const capitalize = (str: { toString: () => string }): string => {
    return str.toString().replaceAll(/\b[a-zA-Z]/g, (match: string) => {
      return match.toUpperCase()
    })
  }
</script>

<template>
  <nav>
    <router-link class="link-primary link-animation" :to="{ name: 'home' }">
      Home
    </router-link>
    <router-link class="link-primary link-animation" :to="{ name: 'category' }">
      {{ capitalize($route.params.categoryName) }}
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

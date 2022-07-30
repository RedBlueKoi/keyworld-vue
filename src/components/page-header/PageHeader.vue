<script setup lang="ts">
  import { ref, watchEffect } from "vue"
  import IconMdi from "@/components/IconMdi.vue"
  import PageHeaderSearch from "./PageHeaderSearch.vue"
  import { mdiCartOutline, mdiMenu } from "@mdi/js"

  const search = ref("")

  const handleCartPreview = () => {
    console.log("Opening cart preview...")
  }
  const handleHamburgerMenu = () => {
    console.log("Opening hamburger menu...")
  }
  const onSearch = () => {
    if (!search.value.trim().length) {
      console.log("I dont know what I am looking for")
      return
    }
    console.log(`I am looking for ${search.value}`)
  }

  watchEffect(() => {
    onSearch()
  })
</script>

<template>
  <header
    class="bg-accent flex justify-between items-center gap-4 px-4 py-2 shadow-xl">
    <a href="/" class="text-primary text-3xl font-semibold">Keyworld</a>
    <page-header-search v-model="search" />
    <div class="text-primary flex gap-4">
      <button type="button" @click="handleCartPreview">
        <icon-mdi :icon="mdiCartOutline" :size="24" />
      </button>
      <button type="button" @click="handleHamburgerMenu">
        <icon-mdi :icon="mdiMenu" :size="24" />
      </button>
    </div>
  </header>
</template>

<style scoped lang="postcss"></style>

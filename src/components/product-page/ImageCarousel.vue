<script setup lang="ts">
  import { computed, ref } from "vue"
  import IconMdi from "@/components/IconMdi.vue"
  import { mdiChevronLeft, mdiChevronRight } from "@mdi/js"

  const props = defineProps<{ images: string[] }>()
  const activeIndex = ref(0)
  const translate = ref(0)
  const changeImage = (number: number) => {
    translate.value = number / Math.abs(number)
    activeIndex.value =
      (((activeIndex.value + number) % props.images.length) +
        props.images.length) %
      props.images.length
  }
</script>

<template>
  <div class="relative" v-if="images">
    <TransitionGroup
      name="carousel"
      tag="div"
      class="relative w-full overflow-hidden rounded-2xl">
      <img
        v-for="(image, index) in images"
        :src="image"
        class="w-full"
        :class="activeIndex !== index ? 'absolute top-0' : ''"
        v-show="activeIndex === index"
        :data-index="index"
        :key="index" />
    </TransitionGroup>
    <icon-mdi
      :icon="mdiChevronLeft"
      :size="48"
      class="absolute inset-y-1/2 cursor-pointer left-0"
      @click="changeImage(-1)" />
    <icon-mdi
      :icon="mdiChevronRight"
      :size="48"
      class="absolute inset-y-1/2 cursor-pointer right-0"
      @click="changeImage(1)" />
    <div class="flex gap-2 p-2 max-w-xl mx-auto">
      <span
        v-for="index in images.length"
        :key="index"
        class="w-full h-1.5 rounded-full cursor-pointer"
        :class="[index - 1 === activeIndex ? 'bg-accent' : 'bg-primary']"
        @click="activeIndex = index - 1"></span>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .carousel-leave-active {
    z-index: 10;
    transition: all 250ms ease-out;
  }

  .carousel-leave-to {
    opacity: 0;
    transform: v-bind("`translateX(${translate*-20}%)`");
  }
</style>

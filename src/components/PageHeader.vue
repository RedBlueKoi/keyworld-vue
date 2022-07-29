<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-green-600 py-4 lg:px-2 shadow border-solid border-t-2 border-[#34495E]">
    <div
      class="flex justify-start lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-[#34495E] pb-5 lg:pb-0">
      <div class="flex items-center flex-shrink-0 text-[#34495E] mr-16">
        <button class="relative" @click="goHome">
          <span class="font-semibold text-2xl tracking-tight">KeyWorld</span>
        </button>
      </div>
    </div>
    <div class="relative mx-auto w-4/12 text-gray-600 lg:block hidden">
      <input
        class="border-2 w-full border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search" />
      <button type="submit" class="absolute right-0 top-0 mt-3 mr-2" @click="handleSearch">
        <svg
          class="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.966 56.966"
          style="enable-background: new 0 0 56.966 56.966"
          width="512px"
          height="512px">
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
    <div class="flex">
      <button class="relative" @click="handleCartPreview">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 26 26"
          stroke="#34495E"
          stroke-width="2">
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
      <button id="nav" class="flex items-center px-3 py-2 text-[#34495E]" @click="handleHamburgerMenu">
        <svg
          class="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
  import router from "@/router"

  export default ({
    name: "PageHeader",
    methods: {
      goHome() {
        // Redirect to home page when clicking on the logo
        router.push("/")
      },
      handleSearch() {
        console.log("Searching...")
      },
      handleCartPreview() {
        console.log("Opening cart preview...")
      },
      handleHamburgerMenu() {
        console.log("Opening hamburger menu...")
      }
    }
  })
</script>

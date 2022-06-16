<template>
  <div class="mx-auto max-w-5xl md:hidden">
    <div class="flex justify-between py-6 px-2">
      <div class="flex flex-row-reverse gap-x-2">
        <div class="text-2xl font-bold">
          <router-link to>Sneakers</router-link>
        </div>
        <button class="items-center" @click="show=!show">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div class="flex space-x-4 md:space-x-10">
        <a class="hover:text-yellow-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </a>
        <div>
          <div class="h-8 w-8 md:h-12 md:w-12 rounded-full bg-yellow-600"></div>
        </div>
      </div>
    </div>
    <div v-show="show">
      <div class="flex flex-col" v-for="link in links" :key="link.id">
        <ul>
          <li class="hover:text-yellow-600 py-4">
            <router-link :to="'/' + link.name" class="  px-4">{{link.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      links: [
        { id: 1, name: "collections" },
        { id: 2, name: "men" },
        { id: 3, name: "women" },
        { id: 4, name: "about" },
        { id: 4, name: "contact" }
      ]
    };
  }
};
</script>
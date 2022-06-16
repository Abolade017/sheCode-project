<template>
  <div class="mx-auto max-w-5xl">
    <div class="md:flex justify-between items-center pt-10 pb-6 hidden">
      <!-- left nav -->
      <div class="flex space-x-10 items-center">
        <div class="text-4xl font-bold flex md:block items-center space-x-2">
          <router-link to>Sneakers</router-link>
        </div>
        <div class="md:flex space-x-10 items-center hidden" v-for="link in links" :key="link.id">
          <ul>
          <li class="hover:text-yellow-600 py-4" >
            <router-link :to="'/' + link.name" class="">{{link.name}}</router-link>
          </li>
        </ul>
        </div>
      </div>
      <div></div>
      <!-- right nav -->
      <div class="flex space-x-10 items-center">
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
          <div class="h-12 w-12 rounded-full bg-yellow-600"></div>
        </div>
      </div>
    </div>
    <div class="md:border-b-2 md:border-gray-300"></div>
  </div>
</template>

<script>
import { exportDefaultSpecifier } from "@babel/types";

export default {
  name: "Navbar",
  data() {
    return {
      show: false,
      links: [
        { id: 1, name: "collections" },
        { id: 2, name: "men" },
        { id: 3, name: "women" },
        { id: 4, name: "about" },
        { id: 4, name: "contact" }
      ]
    };
  },
  methods: {
    navigate() {
      this.$router.push("/" + this.links.name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div>
    <button class="bg-yellow-600 text-white w-60 h-12 rounded-md shadow-lg" id="add">
      <div class="flex items-center space-x-4 justify-center px-4 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
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
        <div>Add to cart</div>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  components: {
    // Button,
  }
};
</script>
<style scoped>
#add:hover{
  transition: 1s;
  opacity: 0.7;
}
</style>
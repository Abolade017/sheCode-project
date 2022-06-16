<template>
  <div class=" md:pt-0 pt-6 md:px-0 px-4 ">
    <div>
      <h1 class="text-yellow-600 text-base font-bold">SNEAKER COMPANY</h1>
    </div>
    <div>
      <h1 class="font-bold text-black text-3xl pt-2">
        Fall Limited Edition
        <br />Sneakers
      </h1>
    </div>
    <div class="py-6">
      <p class="text-gray-500 text-base hidden md:block">
        These low-profile sneakers are your perfect casual wears
        <br />companion. Featuring a durable rubber pouter sole, they'll
        <br />withstand evrything the weather can offer
      </p>
      <p class="text-gray-500  md:hidden block text-sm ">
        These low-profile sneakers are your perfect casual wears
        companion. Featuring a durable rubber pouter sole, they'll
        withstand evrything the weather can offer
      </p>
    </div>
    <Price />
    <div class="md:flex-row flex flex-col items-center md:space-y-0 space-y-4 md:space-x-4 md:pt-0 pt-2">
    <Counter />
    <AddToCart />
    </div>
  </div>
</template>
<script>
import Counter from './Counter.vue'
import AddToCart from './AddToCart.vue';
import Price from './Price.vue';
export default {
    components:{
    Counter,
    AddToCart,
    Price
}
}
</script>
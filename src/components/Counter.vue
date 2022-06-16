<template>
  <div class="flex justify-between items-center bg-gray-100 w-60 md:w-36 h-12 rounded-md">
    <div class="pl-2">
      <Button @click="decrement">-</Button>
    </div>
    <div class="font-bold text-black">{{counter}}</div>
    <div class="pr-2">
      <Button @click="increment">+</Button>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  components: {
    Button
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      return this.counter++;
    },
    decrement() {
      return this.counter--;
    }
  }
};
</script>
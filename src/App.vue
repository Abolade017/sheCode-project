<template>
  <div>
    <Navbar />
    <MobileNavbar />
    <!-- <Home /> -->
    <div class="pt-0 md:pt-20 max-w-5xl mx-auto">
      <div class="flex md:flex-row flex-col  items-center space-x-0 md:space-x-24">
      <SneakerImage />
      <SneakerCompany />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";
import SneakerImage from "./components/SneakerImage.vue";
import SneakerCompany from "./components/SneakerCompany.vue";
import MobileNavbar from "./components/layout/MobileNavbar.vue";
// import Home from "./components/pages/Home.vue";
export default {
  name: "App",
  components: {
    Navbar,
    SneakerImage,
    SneakerCompany,
    MobileNavbar,
    // Home
  },
  data() {
    return {
      show: true
    };
  }
};
</script>

<style>
</style>

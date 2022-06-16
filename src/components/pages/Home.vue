<template>
  <div>
    <Navbar />
    <MobileNavbar />
    <div class="pt-0 md:pt-20 max-w-5xl mx-auto">
      <div class="flex md:flex-row flex-col items-center space-x-0 md:space-x-24">
        <SneakerImage />
        <SneakerCompany />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../layout/Navbar.vue";
import MobileNavbar from "../layout/MobileNavbar.vue";
import SneakerCompany from "../SneakerCompany.vue";
import SneakerImage from "../SneakerImage.vue";
export default {
  components: {
    SneakerImage,
    SneakerCompany,
    Navbar,
    MobileNavbar
  }
};
</script>

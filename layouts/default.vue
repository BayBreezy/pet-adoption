<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  created() {
    if (process.client) {
      AOS.init({
        duration: 1000,
      });
    }
  },
};
</script>

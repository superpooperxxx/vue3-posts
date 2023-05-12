<script>
import Header from "@/components/Header/Header.vue";
import "./App.scss";

export default {
  components: {
    Header,
  },
};
</script>

<template>
  <div class="app container">
    <Header />
    <RouterView></RouterView>
  </div>
</template>

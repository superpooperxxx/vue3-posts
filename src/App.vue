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
    <div class="app__header">
      <Header />
    </div>
    <RouterView></RouterView>
  </div>
</template>

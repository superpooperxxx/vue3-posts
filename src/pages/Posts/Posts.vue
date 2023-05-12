<script>
import axios from "axios";
import "./Posts.scss";
import PostsList from "@/components/PostsList/PostsList.vue";

export default {
  components: {
    PostsList,
  },
  data() {
    return {
      page: 1,
      limit: 5,
      limitOptions: [5, 10, 15, 20],
      usersId: [],
      totalPosts: 100,
    };
  },
  methods: {
    setTotalPosts(total) {
      this.totalPosts = total;
    },
  },
};
</script>

<template>
  <main class="posts-page">
    <div class="posts-page__filters">
      <Select
        :title="'Amount per page'"
        v-model="limit"
        :options="limitOptions"
      />
    </div>

    <div class="posts-page__posts-list">
      <PostsList :limit="limit" :page="page" @setTotalPosts="setTotalPosts" />
    </div>

    <div class="posts-page__btns">
      <button class="posts-page__load-more-btn" @click="page--" v-if="page > 1">
        Prev
      </button>
      <button
        class="posts-page__load-more-btn"
        @click="page++"
        v-if="page < totalPosts / limit"
      >
        Next
      </button>
    </div>
  </main>
</template>

<style></style>

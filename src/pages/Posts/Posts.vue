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
      usersIds: [],
      userFilter: "",
      totalPosts: 0,
    };
  },
  mounted() {
    this.getUsersIds();
  },
  methods: {
    setTotalPosts(total) {
      this.totalPosts = total;
    },
    async getUsersIds() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const ids = res.data.map((user) => user.id);

        this.usersIds = ids;
      } catch (error) {
      } finally {
      }
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

      <Select
        :title="'Filter by user'"
        v-model="userFilter"
        :options="usersIds"
      >
        <option value="">All</option>
      </Select>
    </div>

    <div class="posts-page__posts-list">
      <PostsList
        :limit="limit"
        :page="page"
        @setTotalPosts="setTotalPosts"
        :userFilter="userFilter"
      />
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

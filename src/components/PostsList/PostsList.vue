<script>
import axios from "axios";
import "./PostsList.scss";
import Post from "@/components/Post/Post.vue";

export default {
  components: {
    Post,
  },
  props: {
    page: {
      type: String,
      default: "1",
    },
    limit: {
      type: String,
      default: "5",
    },
    userFilter: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isPostsLoaded: false,
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  watch: {
    limit() {
      this.getPosts();
    },
    page() {
      this.getPosts();
    },
    userFilter() {
      this.getPosts();
    },
  },
  methods: {
    async getPosts() {
      this.isPostsLoaded = false;

      let URL = `https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`;

      if (this.userFilter) {
        URL += `&userId=${this.userFilter}`;
      }

      try {
        const res = await axios.get(URL);
        const { data } = res;

        if (!data.length) {
          this.$router.push("/404");
        }

        this.$emit("setTotalPosts", res.headers["x-total-count"]);

        this.posts = data;
      } catch (error) {
        alert(error);
      } finally {
        this.isPostsLoaded = true;
      }
    },
  },
};
</script>

<template>
  <ul class="posts-list" v-if="isPostsLoaded">
    <router-link :to="`/posts/${post.id}/comments`" v-for="post in posts">
      <Post :post="post" />
    </router-link>
  </ul>
  <Loader v-else />
</template>

<script>
import axios from "axios";
import "./CommentsList.scss";
import Comment from "@/components/Comment/Comment.vue";

export default {
  components: {
    Comment,
  },
  mounted() {
    this.getComments();
  },
  data() {
    return {
      comments: [],
      isCommentsLoaded: false,
    };
  },
  methods: {
    async getComments() {
      this.isCommentsLoaded = false;

      try {
        const currentPostId = this.$route.params.id;

        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${currentPostId}/comments`
        );

        const { data } = res;

        if (!data.length) {
          this.$router.push("/404");
        }

        this.comments = data;
      } catch (error) {
        alert(error);
      } finally {
        this.isCommentsLoaded = true;
      }
    },
  },
};
</script>

<template>
  <ul class="comments-list" v-if="isCommentsLoaded">
    <Comment :comment="comment" v-for="comment in comments" />
  </ul>
  <Loader v-else />
</template>

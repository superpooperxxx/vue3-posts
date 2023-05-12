<script>
import "./Post.scss";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <article class="post">
    <div class="post__header">
      <p class="post__id">#{{ post.id }}</p>
      <h3 class="post__title">{{ post.title }}</h3>
    </div>
    <p class="post__body">{{ post.body }}</p>
  </article>
</template>

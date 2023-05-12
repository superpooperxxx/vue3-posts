<script>
import "./Comment.scss";

export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <article class="comment">
    <div class="comment__header">
      <p class="comment__id">#{{ comment.id }}</p>
      <h3 class="comment__name">{{ comment.name }}</h3>
    </div>
    <a :href="`mailto:'${comment.email}`" class="comment__email">{{
      comment.email
    }}</a>
    <p class="comment__body">{{ comment.body }}</p>
  </article>
</template>

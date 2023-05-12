import { createRouter, createWebHistory } from "vue-router";
import Posts from "@/pages/Posts.vue";
import Comments from "@/pages/Comments.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Posts,
    },
    {
      path: "/posts",
      redirect: "/",
    },
    {
      path: "/posts/:id/comments",
      component: Comments,
    },
  ],
});

export default router;

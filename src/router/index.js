import { createRouter, createWebHistory } from "vue-router";
import Posts from "@/pages/Posts/Posts.vue";
import Comments from "@/pages/Comments/Comments.vue";
import NotFound from "@/pages/NotFound/NotFound.vue";

const router = createRouter({
  mode: "history",
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
    {
      path: "/404",
      component: NotFound,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
  ],
});

export default router;

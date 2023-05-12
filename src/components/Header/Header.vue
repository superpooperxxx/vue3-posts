<script>
import "./Header.scss";

export default {};
</script>

<template>
  <header class="header">
    <p class="header__page-title">
      {{
        $route.path === "/"
          ? "Posts"
          : `Comments for posts with id: ${$route.params.id}`
      }}
    </p>
  </header>
</template>

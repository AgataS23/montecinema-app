<template>
  <div>
    <TopMenu />
    <h1>Movies</h1>
    <MoviesList />
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList.vue";
import TopMenu from "@/components/TopMenu.vue";

export default {
  components: {
    TopMenu,
    MoviesList,
  },
};
</script>

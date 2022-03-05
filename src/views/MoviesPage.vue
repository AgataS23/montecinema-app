<template>
  <div>
    <TopMenu />
    <h1>Movies</h1>
    <MoviesList />
    <!-- <router-link :to="{ name: 'Home' }"> bact to home </router-link>
    <router-link :to="{ name: 'Movie', params: { movieId: movie.id } }">
      movie
    </router-link>
    <router-view /> -->
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

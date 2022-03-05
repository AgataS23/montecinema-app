<template>
  <div class="movies-list">
    <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" />
    <p>my list of movies</p>
  </div>
</template>

<script>
import MovieItem from "@/components/MovieItem.vue";

import movies from "@/mocks/movies";

export default {
  components: {
    MovieItem,
  },
  computed: {
    movies() {
      return movies;
    },
  },
};
</script>

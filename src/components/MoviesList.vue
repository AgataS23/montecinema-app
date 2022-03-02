<template>
  <div class="movies-list">
    <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" />
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
    movie() {
      return movies;
    },
  },
};
</script>

<template>
  <div class="movie-page">
    <router-link :to="{ name: 'Movies' }"> movies </router-link>
    <h1>
      {{ movie.title }}
    </h1>
    <p>
      {{ movie.description }}
    </p>
    <MovieItem />
  </div>
</template>

<script>
import MovieItem from "@/components/MovieItem.vue";
import movies from "@/mocks/movies";

export default {
  components: {
    MovieItem,
  },
  props: {
    movieId: {
      type: Number,
      required: true,
    },
  },

  computed: {
    movie() {
      return movies.find((m) => m.id === this.movieId);
    },
  },
};
</script>

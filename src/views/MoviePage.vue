<template>
  <div class="movie-page">
    <TopMenu />
    <router-link :to="{ name: 'Movies' }"> movies </router-link>
    <h1>
      {{ movie.title }}
    </h1>
    <!-- <p>
      {{ movie.description }}
    </p> -->
    <MovieItem :movie="movie" />
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";
import MovieItem from "@/components/MovieItem.vue";
import movies from "@/mocks/movies";

export default {
  components: {
    TopMenu,
    MovieItem,
  },
  props: {
    movieId: {
      type: [String, Number],
      required: true,
    },
  },

  computed: {
    movie() {
      return movies.find((m) => m.id === +this.movieId);
    },
  },
};
</script>

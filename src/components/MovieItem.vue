<template>
  <router-link
    class="movie-item"
    :to="{ name: 'Movie', params: { movieId: movie.id } }"
  >
    {{ movie.title }}
    nbnb
  </router-link>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

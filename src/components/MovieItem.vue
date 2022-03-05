<template>
  <router-link
    class="movie-item"
    :to="{ name: 'Movie', params: { movieId: movie.id } }"
  >
    {{ movie.title }}
    <p>movie item for test</p>
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

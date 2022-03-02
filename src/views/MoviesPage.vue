<template>
  <div>
    <h1>Movies</h1>
    <MoviesList />
    <router-link :to="{ name: 'Home' }"> bact to home </router-link>
    <router-link :to="{ name: 'Movie' }"> movie </router-link>
    <router-view />
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList.vue";

export default {
  components: {
    MoviesList,
  },
};
</script>

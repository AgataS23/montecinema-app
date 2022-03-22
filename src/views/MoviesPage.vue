<template>
  <div>
    <TopMenu />
    <TopMenuNav />
    <h1>Movies</h1>
    <MoviesList />
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";
import TopMenuNav from "@/components/TopMenuNav.vue";
import MoviesList from "@/components/MoviesList.vue";
export default {
  name: "MoviesPage",
  components: {
    TopMenu,
    TopMenuNav,
    MoviesList,
  },
};
</script>

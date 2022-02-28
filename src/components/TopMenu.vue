<template>
  <nav class="top-menu">
    <router-link
      class="top-menu-item"
      exact-active-class="top-menu-item--active"
      :to="{ name: 'Movies' }"
    >
      Movies
    </router-link>

    <router-link
      class="top-menu-item"
      active-class="top-menu-item--active"
      :to="{ name: 'Screenings' }"
    >
      Screenings
    </router-link>

    <router-link
      class="top-menu-item"
      active-class="top-menu-item--active"
      :to="{ name: 'Contact' }"
    >
      Contact
    </router-link>

    <router-link
      class="top-menu-item"
      active-class="top-menu-item--active"
      :to="{ name: 'Register' }"
    >
      Register
    </router-link>

    <router-link
      class="top-menu-item"
      active-class="top-menu-item--active"
      :to="{ name: 'Login' }"
    >
      Login
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "TopMenu",
};
</script>

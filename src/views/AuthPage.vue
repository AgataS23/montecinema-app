<template>
  <div>
    <TopMenuRegistration></TopMenuRegistration>
    <router-view />
  </div>
</template>

<script>
import TopMenuRegistration from "@/components/TopMenuRegistration.vue";

export default {
  components: {
    TopMenuRegistration,
  },
};
</script>

<template>
  <div
    class="h-[100vh] smooth"
    :class="theme == 'dark' ? 'bg-secondary-dark' : 'bg-secondary-light'"
  >
    <NavBar :theme="theme" @changeTheme="changeTheme" />
  </div>
</template>

<script>
import NavBar from "../src/components/Nav.vue";
export default {
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme == "dark" ? "light" : "dark";
    },
  },
  components: { NavBar },
};
</script>

<style>
.smooth {
  @apply transition-all duration-300;
}
</style>

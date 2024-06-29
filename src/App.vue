<template>
  <div
    class="smooth h-[300vh] flex flex-col pt-10 md:pt-16"
    :class="theme == 'dark' ? 'bg-secondary-dark' : 'bg-secondary-light'"
  >
    <NavBar :theme="theme" @changeTheme="changeTheme" />

    <section id="home">
      <div class="title">Home</div>
    </section>
    <section id="about">
      <div class="title">About</div>
    </section>
    <section id="portfolio">
      <div class="title">Portfolio</div>
    </section>
    <section id="contact">
      <div class="title">Contact</div>
    </section>
  </div>
</template>

<style>
.smooth {
  @apply transition-all duration-300;
}
section {
  @apply p-10;
}
</style>

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

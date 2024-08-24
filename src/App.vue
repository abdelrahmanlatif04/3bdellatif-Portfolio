<template>
  <div
    class="smooth flex flex-col min-h-[100vh] bg-secondary-dark text-white"
    @click="NavState = false"
  >
    <NavBar :NavState="NavState" />
    <Header />
    <About />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import NavBar from "../src/components/Nav.vue";
import Header from "./components/header/header.vue";
import About from "../src/components/about/about.vue";
import Portfolio from "../src/components/portfolio/Portfolio.vue";
import Contact from "../src/components/contact/contact.vue";

export default {
  data() {
    return { NavState: false };
  },
  components: {
    NavBar,
    Header,
    About,
    Portfolio,
    Contact,
  },
};
</script>

<style>
.smooth {
  @apply transition-all duration-300;
}
section {
  @apply p-5 border-y;
}
.title {
  @apply text-3xl font-semibold;
}
</style>

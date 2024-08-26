<template>
  <div
    class="w-[45%] h-full fixed md:relative smooth md:translate-x-0 md:w-full left-0 top-0 md:h-fit z-50 bg-primary-dark"
    :class="pos"
    @click="toggle"
  >
    <div
      class="flex flex-col justify-center items-center max-w-[800px] mx-auto w-full h-full gap-4 text-2xl font-semibold tracking-widest md:flex-row p-3 md:text-lg md:justify-evenly"
    >
      <span
        class="md:hidden absolute top-1/2 right-0 -z-10 -translate-y-1/2 translate-x-1/2 w-10 h-24 rounded-full cursor-pointer smooth bg-primary-dark"
      >
        <img
          class="absolute top-1/2 -translate-y-1/2 w-1/2 right-[1px] invert smooth"
          :class="`${state ? 'rotate-180' : 'rotate-0'}`"
          src="/arrow.png"
        />
      </span>
      <div v-for="link in links" :key="link" class="w-full flex justify-center">
        <a class="smooth hover:opacity-25 text-white" :href="link.href">
          <img :src="link.img" alt="" />
          <p>{{ link.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: true,
      links: [
        { title: "Home", href: "#home", img: "/home.png" },
        { title: "About", href: "#about", img: "/about.png" },
        { title: "Portfolio", href: "#portfolio", img: "/portfolio.png" },
        { title: "Contact", href: "#contact", img: "/contact.png" },
      ],
    };
  },
  methods: {
    toggle() {
      this.state = !this.state;
    },
  },
  computed: {
    pos() {
      if (this.state) {
        return "-translate-x-full";
      } else {
        return "translate-x-0";
      }
    },
  },
  watch: {
    NavState() {
      this.state = this.NavState;
    },
  },
  props: ["NavState"],
};
</script>

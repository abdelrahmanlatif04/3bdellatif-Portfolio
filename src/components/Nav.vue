<template>
  <div
    :class="`${theme == 'dark' ? 'bg-primary-dark' : 'bg-primary-light'}     
    ${state ? '-translate-x-full' : 'translate-x-0'}`"
    class="w-[45%] h-full relative smooth md:translate-x-0 md:w-full md:h-fit"
  >
    <div
      class="theme-btn absolute left-3 top-3 p-1 flex items-center h-6 aspect-[2] rounded-xl cursor-pointer bg-sky-600"
      @click="this.$emit('changeTheme')"
    >
      <div
        class="aspect-square smooth h-4 relative rounded-full bg-orange-500 before:aspect-square before:absolute before:smooth before:rounded-full"
        :class="
          theme == 'light'
            ? 'left-0 bg-orange-400 before:bg-orange-600 before:w-4/5 before:right-1/2 before:top-1/2 before:translate-x-1/2 before:-translate-y-1/2'
            : 'left-full -translate-x-full bg-white before:bg-sky-600 before:w-4/5 before:right-0 before:top-0'
        "
      ></div>
    </div>

    <span
      @click="toggle()"
      class="md:hidden absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-1/2 w-12 h-32 rounded-full cursor-pointer smooth"
      :class="theme == 'dark' ? 'bg-primary-dark' : 'bg-primary-light'"
    >
      <img
        class="absolute top-1/2 -translate-y-1/2 w-1/2 right-[1px]"
        v-if="!state"
        src="../assets/left-arrow.png"
        alt=""
      />
      <img
        class="absolute top-1/2 -translate-y-1/2 w-1/2 right-[1px]"
        v-else
        src="../assets/right-arrow.png"
        alt=""
      />
    </span>
    <ul
      class="flex flex-col justify-center items-center w-full h-full gap-4 text-2xl font-semibold tracking-widest md:flex-row p-3 md:text-lg md:justify-evenly"
    >
      <li v-for="link in links" :key="link">
        <a
          class="smooth hover:opacity-25"
          :class="theme == 'dark' ? 'text-white' : 'text-black'"
          :href="link.href"
          >{{ link.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

<script>
export default {
  data() {
    return {
      state: false,
      links: [
        { title: "link 1", href: "#" },
        { title: "link 2", href: "#" },
        { title: "link 3", href: "#" },
        { title: "link 4", href: "#" },
        { title: "link 5", href: "#" },
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
        return "-translate-x-0";
      }
    },
  },
  props: ["link", "theme"],
};
</script>

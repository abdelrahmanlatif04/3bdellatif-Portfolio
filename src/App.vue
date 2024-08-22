<template>
  <div
    class="smooth flex flex-col h-[300vh]"
    :class="
      theme == 'dark'
        ? 'bg-secondary-dark text-white'
        : 'bg-secondary-light  text-[#fa0]' //needs text color here
    "
  >
    <NavBar :theme="theme" @changeTheme="changeTheme" />
    <section id="header">
      <div class="title">Header</div>
    </section>
    <section id="about">
      <div class="title">About</div>
    </section>
    <section id="portfolio">
      <div class="title">Portfolio</div>
    </section>
    <section id="contact" class="pb-2">
      <div class="title">Contact Me :)</div>
      <div class="flex gap-3 my-6 sm:text-xl tracking-tighter ml-2 flex-wrap">
        <span>
          you can visit my Social Hub
          <a
            target="_blank"
            href="https://3bdellatiif-linkhub.vercel.app/"
            class="underline underline-offset-2 hover:opacity-60 hover:underline-offset-4 text-[#fa0] smooth"
            >here</a
          >
        </span>
        or contact me directly using these links
      </div>
      <ul
        class="grid grid-cols-2 md:grid-cols-4 gap-5 justify-start mt-6 max-w-[800px] mx-auto text-lg"
      >
        <li
          v-for="item in contacts"
          :key="item"
          class="h-5 cursor-pointer hover:opacity-55 smooth"
        >
          <a
            class="w-full h-full flex justify-center items-center gap-3"
            :href="item.dist"
          >
            <img :src="item.img" class="h-full invert" />
            {{ item.title }}
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

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

<script>
import NavBar from "../src/components/Nav.vue";
import fbImg from "./assets/facebook.svg";
import emailImg from "./assets/mail.png";
import githubImg from "./assets/github.png";
import linkedInImg from "./assets/linkedin.png";

export default {
  data() {
    return {
      theme: "dark",
      contacts: [
        {
          title: "Facebook",
          img: fbImg,
          dist: "https://www.facebook.com/profile.php?id=100003984241851&mibextid=ZbWKwL",
        },
        {
          title: "LinkedIn",
          img: linkedInImg,
          dist: "https://www.linkedin.com/in/abdelrahmanlatif/",
        },
        {
          title: "Email",
          img: emailImg,
          dist: "mailto:abdelrahmanlatif04@gmail.com",
        },
        {
          title: "Github",
          img: githubImg,
          dist: "https://github.com/abdelrahmanlatif04",
        },
      ],
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

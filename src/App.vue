<template>
  <div
    class="smooth flex flex-col font-mono h-[300vh] md:py-0 py-5"
    :class="
      theme == 'dark'
        ? 'bg-secondary-dark text-white'
        : 'bg-secondary-light  text-[#fa0]' //needs text color here
    "
  >
    <NavBar :theme="theme" @changeTheme="changeTheme" />
    <!-- <section
      id="home"
      class="flex flex-col sm:flex-row gap-8 text-center items-center sm:text-3xl text-sm sm:text-start"
    >
    <div class="w-1/2">
      <img
        src="./assets/avatar.jpg"
        class="rounded-full border-4 border-white"
      />
    </div>
      <div class="header flex flex-col justify-center w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident id
        maiores expedita repudiandae nihil, nobis dolore quae atque perferendis
        saepe minima, asperiores repellat, adipisci quasi harum officia unde
        quod temporibus! Labore, facere quae! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Aspernatur, nihil!
      </div>
    </section> -->

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
        class="flex justify-around gap-y-10 gap-5 mt-6 flex-wrap max-w-[800px] mx-auto text-lg"
      >
        <li
          v-for="item in contacts"
          :key="item"
          class="h-5 flex justify-center items-center gap-3 cursor-pointer hover:opacity-55 smooth"
        >
          
<a class="w-full h-full" :href="item.dist">
<img :src="item.img" class="h-full invert" />
{{ item.title }}
<a/>
          
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

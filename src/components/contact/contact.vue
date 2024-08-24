<template>
  <section class="pb-2">
    <div class="title">Contact Me :)</div>
    <div class="my-6 sm:text-xl tracking-tighter ml-2">
      you can visit my Links hub
      <a
        target="_blank"
        href="https://3bdellatiif-linkhub.vercel.app/"
        class="underline underline-offset-2 hover:opacity-60 hover:underline-offset-4 text-[#fa0] smooth"
        >here</a
      >
      or contact me directly using E-mail
    </div>

    <Form />

    <ul
      class="grid grid-cols-2 gap-5 justify-start mt-6 max-w-[800px] mx-auto text-lg"
      :class="'md:grid-cols-' + links.length"
    >
      <li
        v-for="item in links"
        :key="item"
        class="h-5 cursor-pointer hover:opacity-55 smooth"
      >
        <a
          class="w-full h-full flex justify-center items-center gap-3"
          target="_blank"
          :href="item.dist"
        >
          <img :src="item.img" class="h-full invert" />
          {{ item.title }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import Form from "./Form.vue";
export default {
  data() {
    return {
      links: [
        {
          title: "Facebook",
          img: "facebook.svg",
          dist: "https://www.facebook.com/profile.php?id=100003984241851&mibextid=ZbWKwL",
        },
        {
          title: "LinkedIn",
          img: "linkedin.png",
          dist: "https://www.linkedin.com/in/abdelrahmanlatif/",
        },
        {
          title: "Email",
          img: "mail.png",
          dist: "mailto:abdelrahmanlatif04@gmail.com",
        },
        {
          title: "Github",
          img: "github.png",
          dist: "https://github.com/abdelrahmanlatif04",
        },
      ],
    };
  },
  components: { Form },
};
</script>


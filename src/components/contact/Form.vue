<template>
  <form
    @submit.prevent="submit"
    class="flex flex-col max-w-[450px] mx-auto gap-5 p-3 rounded-lg bg-gray-600 items-center"
  >
    <div class="w-full">
      <label for="full-name">Full Name</label>
      <input
        v-model="contactForm.name"
        type="text"
        placeholder="Full Name"
        id="full-name"
      />
    </div>

    <div class="w-full">
      <label for="email">Email</label>
      <input
        v-model="contactForm.email"
        type="email"
        placeholder="Email"
        id="email"
      />
    </div>

    <div class="w-full">
      <label for="msg">Message</label>
      <textarea
        v-model="contactForm.msg"
        placeholder="Type a message..."
        id="msg"
        class="aspect-[2.2]"
      ></textarea>
    </div>
    <button
      type="submit"
      class="bg-white border-2 border-white text-gray-600 px-2 py-1 w-fit mt-1 rounded-lg font-bold smooth tracking-wide hover:tracking-[0.15em] hover:bg-transparent text-gray-600x hover:text-white"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      contactForm: {
        name: null,
        email: null,
        msg: null,
      },
    };
  },
  methods: {
    submit() {
      // each input validation
      // email regax
      // sending email procces
      if (
        this.contactForm.name &&
        this.contactForm.message &&
        this.contactForm.email
      ) {
        console.log(this.contactForm);
      }
    },
  },
};
</script>

<style>
input,
textarea {
  @apply px-4 py-2 rounded-lg w-full mt-2 focus:outline-none text-black;
}
label {
  @apply cursor-pointer pl-2 ;
}
</style>

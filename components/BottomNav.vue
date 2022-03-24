<template>
  <div class="lg:hidden h-16 bg-white fixed bottom-0 left-0 w-full z-50">
    <nav class="h-full flex items-center w-full">
      <ul class="flex items-center justify-evenly w-full space-x-3">
        <li
          @click="active = m.text"
          v-for="(m, i) in menu"
          :key="`mobileLink-${i}`"
          class="group"
        >
          <nuxt-link
            :to="m.link"
            class="flex font-medium flex-col space-y-1 justify-center items-center text-slate-500"
          >
            <div
              v-html="m.icon"
              :class="{ 'text-primary-600': m.text == active }"
              class="object-cover w-6 h-6 group-hover:text-primary-600"
            />
            <span
              :class="{ 'text-primary-600': m.text == active }"
              class="text-sm"
              >{{ m.text }}</span
            >
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Home from "~/assets/home.svg?raw";
import Inbox from "~/assets/inbox.svg?raw";
import Heart from "~/assets/heart.svg?raw";
import User from "~/assets/user.svg?raw";
export default {
  components: {
    Home,
    Inbox,
    Heart,
    User,
  },
  data() {
    return {
      active: "Home",
      menu: [
        { text: "Home", link: "/home#Home", icon: Home },
        { text: "Inbox", link: "/home#Inbox", icon: Inbox },
        { text: "Favorite", link: "/home#Favorite", icon: Heart },
        { text: "Profile", link: "/home#Profile", icon: User },
      ],
    };
  },
};
</script>

<style></style>

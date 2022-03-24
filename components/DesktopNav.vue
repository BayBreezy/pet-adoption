<template>
  <header class="w-full h-24 hidden lg:block">
    <nav class="flex items-center justify-between lg:max-w-4xl mx-auto h-full">
      <nuxt-link to="/home" class="font-bold text-4xl">
        Pet<span class="text-primary-600">A</span>doption
      </nuxt-link>
      <div class="space-x-6 flex items-center">
        <ul class="flex space-x-4">
          <li
            @click="active = m.text"
            v-for="(m, i) in menu"
            :key="`navLink-${i}`"
            class="group"
          >
            <nuxt-link
              :class="{
                'text-primary-600': active == m.text,
              }"
              class="font-medium py-2 px-3 rounded inline-block text-[15px]"
              :to="m.link"
              >{{ m.text }}</nuxt-link
            >
            <div
              :class="{
                'h-px w-3/4 mx-auto bg-primary-600 scale-x-100':
                  m.text == active,
                'scale-x-0': m.text != active,
              }"
              class="group-hover:scale-x-100 transition-all duration-300 h-px w-3/4 mx-auto bg-primary-600"
            ></div>
          </li>
        </ul>
        <nuxt-link
          to="#"
          class="flex items-center space-x-2 bg-gradient-to-tr from-primary-700 via-primary-500 to-pink-300 text-white py-2 px-3 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span class="text-[15px] font-medium">Search</span>
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      active: "Home",
      menu: [
        { text: "Home", link: "/home#Home" },
        { text: "Inbox", link: "/home#Inbox" },
        { text: "Favorite", link: "/home#Favorite" },
        { text: "Profile", link: "/home#Profile" },
      ],
    };
  },
};
</script>

<style></style>

<template>
  <div>
    <div
      class="group transition-all duration-500 shadow hover:shadow-lg bg-white rounded-xl p-3 overflow-hidden cursor-pointer relative"
    >
      <!-- Heart button -->
      <button
        type="button"
        class="rounded-full transition-all duration-500 focus:bg-secondary focus:text-white h-8 w-8 text-secondary bg-white absolute top-5 right-5 z-50 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
      <img
        src="/p1.jpg"
        alt="Puppy One - Bruce"
        class="object-cover rounded-2xl w-full h-44 group-hover:scale-105 transition-all duration-500"
      />
      <div class="px-3 mt-2">
        <p class="font-black text-lg">Bruce</p>
        <div class="flex justify-between items-center space-x-2">
          <span class="truncate text-sm text-slate-400"
            >Dutch Pug Lorem ipsum dolor sit amet.</span
          >
          <div
            class="bg-primary-200 text-primary-500 text-sm rounded-full px-2 font-bold"
          >
            2yrs
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heart from "~/assets/heart.svg?raw";
export default {
  components: { Heart },
};
</script>

<style></style>

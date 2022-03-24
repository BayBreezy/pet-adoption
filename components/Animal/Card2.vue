<template>
  <div>
    <div
      class="flex space-x-6 p-3 rounded-2xl cursor-pointer mt-7 group bg-white shadow hover:shadow-lg transition-all duration-500 overflow-hidden"
    >
      <img
        src="/p2.jpg"
        alt="Puppy One - Bruce"
        class="object-cover rounded-2xl h-full w-1/3 lg:w-1/3 lg:h-52 group-hover:scale-105 transition-all duration-500"
      />
      <div class="w-full">
        <div class="flex items-start justify-between w-full">
          <h1 class="font-bold text-xl flex-auto">Beethoven</h1>
          <button
            type="button"
            class="rounded-full transition-all duration-500 focus:bg-secondary focus:text-white h-8 w-8 text-secondary bg-white flex items-center justify-center"
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
        </div>
        <p class="text-slate-500 capitalize">
          nova scotia duck tolling retriever
        </p>
        <div
          class="bg-primary-200 inline-block text-primary-500 text-sm rounded-full mt-3 px-3 py-1 font-bold"
        >
          2yrs
        </div>
        <button
          type="button"
          @click="playBark"
          class="flex items-center justify-center space-x-1 mt-2 bg-primary-200 text-primary-600 py-1 px-2 rounded-full"
        >
          <span class="font-bold text-sm">Listen</span>
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
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audio: null,
    };
  },
  methods: {
    playBark() {
      this.stopBark();
      this.audio = new Audio("/pup-bark.wav");
      this.audio.play();
    },
    stopBark() {
      if (this.audio) {
        this.audio.pause();
      }
    },
  },
};
</script>

<style></style>

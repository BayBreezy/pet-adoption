<template>
  <div class="pattern">
    <div class="main-selection">
      <div
        class="grid grid-cols-1 grid-rows-2 min-h-screen mx-auto max-w-full md:max-w-lg"
      >
        <div class="bg-[url('/start.png')] bg-no-repeat bg-center"></div>
        <div class="h-full rounded-t-[50px] shadow-start relative bg-white">
          <div
            @click="playBark"
            @mouseenter="playBark"
            @mouseleave="stopBark"
            class="bg-secondary group hover:scale-110 transition-all duration-[800ms] p-5 rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-8 border-white shadow-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--fa-solid text-white h-14 w-14 group-hover:rotate-[360deg] transition-all group-hover:cursor-pointer duration-[800ms]"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 224c-79.41 0-192 122.76-192 200.25c0 34.9 26.81 55.75 71.74 55.75c48.84 0 81.09-25.08 120.26-25.08c39.51 0 71.85 25.08 120.26 25.08c44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13c-29.12 6.96-44.29 40.69-33.89 75.34c10.4 34.65 42.44 57.09 71.56 50.13c29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87s-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13c-10.4 34.65 4.77 68.38 33.89 75.34c29.12 6.96 61.15-15.48 71.56-50.13c10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87c11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"
              ></path>
            </svg>
          </div>

          <h1 class="text-center mt-16 font-bold text-3xl">
            Ready to make a <br />new friend?
          </h1>
          <p class="text-center text-slate-400 mt-4">
            We have the cutest pets availale, <br />
            all waiting to make you <br />their new friend.
          </p>

          <div class="space-x-2 flex items-center justify-center mt-10">
            <div
              class="cursor-pointer h-2 w-5 bg-primary-600 rounded-full"
            ></div>
            <div class="cursor-pointer h-2 w-2 bg-slate-300 rounded-full"></div>
            <div class="cursor-pointer h-2 w-2 bg-slate-300 rounded-full"></div>
          </div>

          <nuxt-link
            class="text-center bg-primary-600 text-white rounded-xl w-4/5 block mx-auto py-5 text-lg font-bold mb-3 mt-4 hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-400"
            to="/home"
          >
            <span class="inline-block text-center"> Get Started </span>
          </nuxt-link>
        </div>
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

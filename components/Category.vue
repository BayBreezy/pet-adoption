<template>
  <div>
    <client-only>
      <swiper :options="swiperOption">
        <swiper-slide v-for="p in categories" :key="`petType${p.name}`">
          <div
            class="rounded-full flex flex-row space-x-3 items-center p-2 group hover:bg-gradient-to-r hover:from-primary-700 hover:to-primary-400 transition-all duration-300"
          >
            <img
              :src="p.image"
              class="object-cover h-14 w-14 rounded-full"
              :alt="`Image of ${p.name}`"
            />
            <p class="font-bold truncate group-hover:text-white">
              {{ p.name }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      categories: [
        {
          name: "Birds",
          image: "/birds.jpg",
          link: "#",
        },
        { name: "Cats", image: "/cats.jpg", link: "#" },
        { name: "Dogs", image: "/dogs.jpg", link: "#" },
        { name: "Fish", image: "/fish.jpg", link: "#" },
        { name: "Frogs", image: "/frogs.jpg", link: "#" },
        { name: "Rabbits", image: "/rabbits.jpg", link: "#" },
        { name: "Snakes", image: "/snakes.jpg", link: "#" },
        { name: "Turtles", image: "/turtle.jpg", link: "#" },
      ],
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 20,
        grabCursor: true,
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style></style>

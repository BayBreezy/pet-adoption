<template>
  <div class="main-selection min-h-screen pattern">
    <div class="lg:max-w-4xl md:max-w-2xl px-5 mx-auto w-full h-full pattern">
      <DesktopNav />
      <MobileHeader />
      <MobileSearch />

      <main class="mb-16">
        <div class="w-full mx-auto">
          <h1
            data-aos="fade-down"
            data-aos-duration="500"
            class="font-bold text-2xl mt-7 md:mt-10"
          >
            Pet Categories
          </h1>

          <div class="md:mt-10 mt-5 mb-10">
            <Category />
          </div>
          <div data-aos="fade" class="grid grid-cols-2 lg:grid-cols-4 gap-x-3">
            <template v-for="n in 4">
              <AnimalCard1 :key="`animalCard${n}`" />
            </template>
          </div>
          <h1
            data-aos="fade-down"
            data-aos-duration="500"
            class="font-bold text-2xl mt-7 md:mt-10"
          >
            Newest kid on the block
          </h1>

          <AnimalCard2 data-aos="fade" />
        </div>
      </main>
      <br />
    </div>
    <BottomNav />
  </div>
</template>

<style></style>

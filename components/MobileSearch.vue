<template>
  <div>
    <div class="lg:hidden block">
      <h1 class="font-bold text-3xl mb-7">Find a new friend</h1>
      <div class="flex justify-between space-x-6">
        <div class="relative group flex-1">
          <input
            type="text"
            class="w-full placeholder:text-slate-600 placeholder:text-sm py-3 pl-9 rounded-xl outline-none focus:ring-1 focus:ring-primary-400 border border-slate-300"
            placeholder="Search for Pets"
          />
          <div class="absolute left-2 top-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-slate-500"
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
          </div>
        </div>
        <button
          class="rounded-xl border-2 border-slate-300 text-slate-500 py-2 px-3 focus:text-primary-500 focus:border-primary-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

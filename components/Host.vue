<script setup>
defineProps({
  name: String,
  image: String
})
</script>

<template>
  <div class="relative w-56 h-56 rounded-full border border-black border-opacity-25" style="background: #e7db87">
    <h3 class="absolute bottom-0 -right-4 z-10" style="text-shadow: 0 0 4px white">{{ name }}</h3>
    <img class="h-full w-full rounded-full filter grayscale mix-blend-luminosity" :src="image" />
  </div>
</template>

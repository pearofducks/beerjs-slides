<script setup>
defineProps({
  name: String,
  image: String
})
</script>

<template>
  <div class="relative rounded-full flex items-center">
    <img class="h-full aspect-square rounded-full filter grayscale mix-blend-luminosity opacity-75  border border-black border-opacity-50" :src="image" />
    <h3 class="opacity-80 ml-8">{{ name }}</h3>
  </div>
</template>

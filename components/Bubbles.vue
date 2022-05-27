<script setup>
import { onMounted, h } from 'vue'

const bubble = h('div', { class: 'bubble absolute bottom-0' },
  h('div', { class: 'bubble-inner w-4 h-4 rounded-full' }))

onMounted(() => {
  console.log({ bubble })
  const contentEl = document.querySelector('#slide-content')
  // contentEl.appendChild(bubble)
  console.log(contentEl)
})
</script>

<template></template>

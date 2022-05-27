<template>
  <div class="slidev-layout two-columns beer w-full h-full">
    <section class="w-full h-full grid grid-cols-2 items-center z-10 relative">
      <div>
        <slot />
      </div>
      <div>
        <slot name="right" />
      </div>
    </section>
    <div id="bubble-target" />
  </div>
</template>

<script>
export default { inheritAttrs: false }
</script>

<script setup>
import { onMounted } from 'vue'

const boundedRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const sleep = n => new Promise(r => setTimeout(r, n))

onMounted(async () => {
  const container = document.querySelector('#bubble-target')

  const bubbleCount = boundedRandom(12, 24)
  for await (const _ of Array.from({ length: bubbleCount })) {
    const bubble = document.createElement('div')
    bubble.className = `bubble backface-hidden absolute z-0`
    bubble.style.right = boundedRandom(0, 960) + 'px'
    bubble.style.bottom = boundedRandom(0, 24) + 'px'
    const bubbleInner = document.createElement('div')
    bubbleInner.className = 'bubble-inner rounded-full'
    const size = boundedRandom(0, 16)
    bubbleInner.style.height = size + 'px'
    bubbleInner.style.width = size + 'px'
    bubbleInner.style.background = '#D7C65C'
    bubble.appendChild(bubbleInner)
    container.appendChild(bubble)

    await sleep(boundedRandom(2000, 24000))
  }
})
</script>

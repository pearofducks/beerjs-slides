<template>
  <div id="bubble-target" />
</template>

<style>
@keyframes bubble {
  0% {
    transform: translateY(32px);
  }
  100% {
    transform: translateY(-640px);
  }
}
@keyframes bubble-wobble {
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(-10%);
  }
}
.bubble {
  animation: bubble 12s linear infinite;
}
.bubble .bubble-inner {
  animation: bubble-wobble 1.2s ease-in-out infinite alternate;
}
</style>

<script>
export default { inheritAttrs: false }
</script>

<script setup>
import { onMounted } from 'vue'

const boundedRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

onMounted(() => {
  const container = document.querySelector('#bubble-target')
  const maxBubbleSize = 16

  const bubbleCount = boundedRandom(12, 24)
  for (const _ of Array.from({ length: bubbleCount })) {
    const bubble = document.createElement('div')
    bubble.className = 'bubble backface-hidden absolute z-0'
    bubble.style.right = boundedRandom(0, 960) + 'px' // 960 is the slide width (slidev transforms the whole page but pixels will be 960)
    bubble.style.bottom = boundedRandom(-89, maxBubbleSize * -1) + 'px' // slide height is 551, and we stop transforming at -640, so that's a max of 89
    bubble.style.animationDelay = boundedRandom(0, 18000) + 'ms' // we need this to be more than our animation-duration (12s)
    const bubbleInner = document.createElement('div')
    bubbleInner.className = 'bubble-inner rounded-full'
    const size = boundedRandom(0, maxBubbleSize)
    bubbleInner.style.height = size + 'px'
    bubbleInner.style.width = size + 'px'
    bubbleInner.style.background = '#D7C65C'
    bubble.appendChild(bubbleInner)
    container.appendChild(bubble)
  }
})
</script>

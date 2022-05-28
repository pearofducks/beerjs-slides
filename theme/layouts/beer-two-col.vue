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
    <slot name="outside" />
  </div>
</template>

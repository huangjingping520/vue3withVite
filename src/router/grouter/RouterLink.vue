<script setup>
let props = defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <a :href="'#' + props.to">
      <slot></slot>
    </a>
  </div>
</template>

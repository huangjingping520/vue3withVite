<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <a :href="`#${props.to}`">
      <slot />
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  value: Number,
  theme: {
    type: String,
    default: 'orange',
  },
})
const emits = defineEmits('update-rate')
// let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))

const themeObj = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff',
}

const fontstyle = computed(() => {
  return `color: ${themeObj[props.theme]}`
})

const width = ref(props.value)
function mouseOver(i) {
  width.value = i
}

function mouseOut() {
  width.value = props.value
}

const fontwidth = computed(() => `width: ${width.value}em`)

function onRate(num) {
  emits('update-rate', num)
}
</script>

<template>
  <div :style="fontstyle">
    <slot />
    <div class="rate" @mouseout="mouseOut">
      <span v-for="num in 5" :key="num" @mouseover="mouseOver(num)">☆</span>
      <span class="hollow" :style="fontwidth">
        <span v-for="num in 5" :key="num" @click="onRate(num)" @mouseover="mouseOver(num)">★</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.rate {
  position: relative;
  display: inline-block;
}

.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>

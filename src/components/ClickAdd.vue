<script setup>
let width = ref(100)
function change (){
  width.value += 100
}
</script>

<template>
  <div>
    <div class="box" :style="{width:width+'px'}"></div>
    <button @click="change">click</button>
  </div>
</template>

<style scoped>
.box {
  background-color: blue;
  height: 100px;
  transition: width 1s linear;
}
</style>

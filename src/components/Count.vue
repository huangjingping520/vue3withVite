<script setup>
let store = useStore()
let count = computed(() => store.state.count)
let double = computed(() => store.getters.double)
function add() {
  store.commit('add')
}
function asyncAdd() {
  store.dispatch('asyncAdd')
}
</script>

<template>
  <div>
    <div @click="add">
      {{ count }} | {{ double }}
    </div>

    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>

<style scoped>
</style>

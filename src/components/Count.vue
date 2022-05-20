<script setup>
let store = useStore()
let count = computed(() => store.state.count)

function add () {
  store.commit('add')
}
</script>

<template>
  <div>
    <div @click="add">
      {{ count }}
    </div>
  </div>
</template>

<style scoped>
  
</style>

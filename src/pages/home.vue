<template>
  <div>
    <h1>home page</h1>
    <Count />

    <ClickAdd />
    <button @click="toggle">FullScreen</button>
    <TodoList />
    <h3>Your Score: {{ score }}</h3>
    <Rate :value="score" @update-rate="update">课程评分</Rate>
  </div>
</template>
<script setup>
import TodoList from '../components/TodoList.vue'
import Rate from '../components/Rate.vue'
import ClickAdd from '../components/ClickAdd.vue'
import Count from '../components/Count.vue'

let score = ref(3.5)
function update(num) {
  score.value = num
}

const { toggle } = useFullscreen()

</script>
<style>
  
</style>

<script setup>
// import { ref,computed } from 'vue'
import { useMouse } from '../utils/mouse'

let { x, y } = useMouse()

let { title, todos, addTodo, clear, active, all, allDone } = useTodos()

function useTodos () {
  let title = ref('')
  let todos = ref([{title:'study', done:false}])

  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false
    })
    title.value = ''
  }

  function clear(){
    todos.value = todos.value.filter(v => !v.done)
  }

  let active = computed(() => {
    return todos.value.filter(v => !v.done).length
  })

  let all = computed(() => {
    return todos.value.length
  })

  let allDone = computed({
    get: function () {
      return active.value === 0
    },
    set: function (val){
      todos.value.forEach(v => v.done = val)
    }
  })

  return { title, todos, addTodo, clear, active, all, allDone }
}
</script>

<template>
  <div>
    <div>
      x: {{ x }}
      y: {{ y }}
    </div>

    <input type="text" v-model="title" @keydown.enter="addTodo" >
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone">
      <span>{{ active }} / {{ all }}</span>
    </div>
  </div>
</template>

<style scoped>
  h1{
    color: red;
  }
</style>

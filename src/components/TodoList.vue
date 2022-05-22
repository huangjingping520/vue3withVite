<script setup>
// import { ref,computed } from 'vue'
import { useMouse } from '../utils/mouse'

const { x, y } = useMouse()

const { title, todos, showModal, addTodo, clear, active, all, allDone } = useTodos()

function useTodos() {
  const title = ref('')
  const todos = ref([{ title: 'study', done: false }])
  const showModal = ref(false)

  function addTodo() {
    if (!title.value) {
      showModal.value = true
      setTimeout(() => {
        showModal.value = false
      }, 1500)
      return
    }
    todos.value.push({
      title: title.value,
      done: false,
    })
    title.value = ''
  }

  function clear() {
    todos.value = todos.value.filter(v => !v.done)
  }

  const active = computed(() => {
    return todos.value.filter(v => !v.done).length
  })

  const all = computed(() => {
    return todos.value.length
  })

  const allDone = computed({
    get() {
      return active.value === 0
    },
    set(val) {
      todos.value.forEach(v => v.done = val)
    },
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

    <div v-if="showModal" class="info-wrapper">
      <div class="info">
        输入为空
      </div>
    </div>

    <input v-model="title" type="text" @keydown.enter="addTodo">
    <button v-if="active < all" @click="clear">
      清理
    </button>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo">
        <input v-model="todo.done" type="checkbox">
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>
      暂无数据
    </div>
    <div>
      全选<input v-model="allDone" type="checkbox">
      <span>{{ active }} / {{ all }}</span>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: red;
}

.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}

.info {
  padding: 20px;
  color: white;
  background: blue;
}
</style>

/* eslint-disable react/display-name */
export default defineComponent({
  setup() {
    const title = ref('')
    const todos = ref([{
      title: 'study',
      done: true
    },
    {
      title: 'sleep',
      done: false
    }])
    function addTodo() {
      todos.value.push({
        title: title.value
      })
      title.value = ''
    }
    return () => <div>
      <input type="text" vModel={title.value}/>
      <button onClick={ addTodo }>click</button>
      <ul>
        {
          todos.value.length
            ? todos.value.map((todo) => {
              return <li key={todo}>{todo.title}</li>
            })
            : <li>no todo</li>
        }
      </ul>
    </div>
  }
})

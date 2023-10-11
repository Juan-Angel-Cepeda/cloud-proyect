<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import axios from 'axios'

const todos = ref([])
const name = ref('')
const input_content = ref('')

const todos_asc = computed(() => todos.value.sort((a,b) =>{
	return a.createdAt - b.createdAt
}))

const addTodo = async() => {
  if (input_content.value.trim() === '') {
    return
  }

  const newTodo = {
    name: input_content.value,
    done: false,
  }

  await axios.post('http://18.222.216.227/tasks', newTodo)
    .then(response => {
      todos.value.push(response.data)
    })
    .catch(error => {
      console.error('Error adding todo:', error)
    })
}

const removeTodo = async (todo) => {
  await axios.delete(`http://18.222.216.227/tasks/${todo.id}`)
    .then(response => {
      todos.value = todos.value.filter((t) => t !== todo)
    })
    .catch(error => {
      console.error('Error deleting todo:', error)
    })
}

onMounted(async () => {
  name.value = localStorage.getItem('name') || ''

  try {
    const response = await axios.get('http://18.222.216.227/tasks')
    todos.value = response.data
  } catch (error) {
    console.error('Error getting todos:', error)
  }
})

</script>

<template>
	<main class="app">
		
		<section class="greeting">
			<h2 class="title">
				To-do
			</h2>
		</section>

		<section class="create-todo">
			<h3>Create a To-Do</h3>

			<form id="new-todo-form" @submit.prevent="addTodo">
				<h4>What's on your todo list?</h4>
				<input 
					type="text" 
					name="content" 
					id="content" 
					placeholder="e.g. make a video"
					v-model="input_content" />
			
				<input type="submit" value="Add todo" />
			</form>
		</section>

		<section class="todo-list">
			<h3>TODO LIST</h3>
			<div class="list" id="todo-list">

				<div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">
					<label>
						<input type="checkbox" v-model="todo.done" />
						<span :class="`bubble ${
							todo.category == 'business' 
								? 'business' 
								: 'personal'
						}`"></span>
					</label>

					<div class="todo-content">
						<input type="text" v-model="todo.name" />
					</div>

					<div class="actions">
						<button class="delete" @click="removeTodo(todo)">Delete</button>
					</div>
				</div>

			</div>
		</section>

	</main>
</template>

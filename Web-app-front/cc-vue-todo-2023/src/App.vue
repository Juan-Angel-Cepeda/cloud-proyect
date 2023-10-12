<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import axios from 'axios'

var todos = [];
const name = ref('')
const input_content = ref('')

const addTodo = async() => {
  if (input_content.value.trim() === '') {
    return
  }

  const newTodo = {
    name: input_content.value,
    done: false,
  }

  await axios.post('http://3.135.228.247/tasks', newTodo)
    .then(response => {
      todos.push(response.data)
    })
    .catch(error => {
      console.error('Error adding todo:', error)
    })
}

const removeTodo = async (todo) => {
  await axios.delete(`http://3.135.228.247/tasks/${todo._id}`)
    .then(response => {
      todos = todos.filter((t) => t !== todo)
    })
    .catch(error => {
      console.error('Error deleting todo:', error)
    })
}

onMounted(async () => {
  try {
    const response = await axios.get('http://3.135.228.247/tasks')
	console.log(todos)
    todos = response.data.objs
	console.log(todos)

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
			<h3>To Do List</h3>
			<div class="list" id="todo-list">
				<div v-for="todo in todos" :class="`todo-item ${todo.done && 'done'}`">
					{{ todo._name }}
					{{ todo._done }}
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

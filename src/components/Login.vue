<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')

const login = async () => {
  try {
    const res = await axios.post('http://localhost:8000/api/login/', {
      username: username.value,
      password: password.value
    })
    localStorage.setItem('access', res.data.access)
    alert('Login successful')
  } catch (err) {
    alert('Login failed')
    console.error(err)
  }
}
</script>

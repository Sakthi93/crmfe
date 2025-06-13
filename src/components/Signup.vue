<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <input v-model="username" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const username = ref('')
const email = ref('')
const password = ref('')

const signup = async () => {
  try {
    await axios.post('http://localhost:8000/api/register/', {
      username: username.value,
      email: email.value,
      password: password.value
    })
    alert('Registered! Now login.')
  } catch (error) {
    alert('Signup failed')
    console.error(error)
  }
}
</script>

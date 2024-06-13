<template>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <h2 class="title is-4">Sign Up</h2>
            <form @submit.prevent="submitForm">
              <div class="field">
                <label class="label" for="username">Username</label>
                <div class="control">
                  <input class="input" type="text" id="username" v-model="form.username" required>
                </div>
              </div>
              <div class="field">
                <label class="label" for="email">Email</label>
                <div class="control">
                  <input class="input" type="email" id="email" v-model="form.email" required>
                </div>
              </div>
              <div class="field">
                <label class="label" for="password">Password</label>
                <div class="control">
                  <input class="input" type="password" id="password" v-model="form.password" required>
                </div>
              </div>
              <div class="control">
                <button class="button is-primary" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    username: '',
    email: '',
    password: ''
  });
  
  const submitForm = () => {
    // Validate form
    if (!form.value.username || !form.value.email || !form.value.password) {
      alert('All fields are required.');
      return;
    }
  
    // Mock API call
    console.log('Form submitted:', form.value);
  
    // Reset form
    form.value.username = '';
    form.value.email = '';
    form.value.password = '';
  };
  </script>
  
  <style scoped>
  .signup-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    background: #fff;
  }
  label, h2 {
    color: black;
  }
  input {
    background-color: #fff;
  }
  </style>
  
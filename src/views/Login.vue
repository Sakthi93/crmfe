<template>
    <div class="min-h-screen flex items-center justify-center bg-white text-black">
        <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
            <form @submit.prevent="login" class="space-y-4">
                <input v-model="username" type="text" placeholder="Username" required
                    class="w-full px-4 py-2 border rounded-md" />
                <input v-model="password" type="password" placeholder="Password" required
                    class="w-full px-4 py-2 border rounded-md" />
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    Login
                </button>
            </form>
            <p class="text-sm text-center mt-4">
                Don't have an account?
                <a href="/signup" class="text-blue-600 hover:underline">Sign up</a>
            </p>
            <p v-if="error" class="text-red-500 text-sm mt-2 text-center">{{ error }}</p>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const error = ref('')

function login() {
    // your login logic
}
</script>

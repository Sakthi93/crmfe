<template>
    <div class="login">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input v-model="username" placeholder="Username" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const username = ref('')
        const password = ref('')
        const error = ref(null)

        const login = async () => {
            try {
                const response = await axios.post('login/', {
                    username: username.value,
                    password: password.value
                })
                localStorage.setItem('access_token', response.data.access)
                localStorage.setItem('refresh_token', response.data.refresh)
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`
                router.push('/home')
            } catch (err) {
                error.value = 'Invalid username or password'
            }
        }

        return { username, password, login, error }
    }
}
</script>

<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Customers</h2>
        <ul>
            <li v-for="customer in customers" :key="customer.id">
                {{ customer.name }} – {{ customer.email }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const customers = ref([])

onMounted(async () => {
    console.log("Onmounted")
    const response = await axios.get('http://localhost:8000/api/customers/')
    customers.value = response.data
})
</script>

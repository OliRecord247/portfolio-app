<script lang="ts" setup>
import { useQueryClient, useQuery } from '@tanstack/vue-query'

const queryClient = useQueryClient()

const { isLoading, data } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
        const res = await fetch("http://localhost:5000/skills");
        const data = await res.json();
        return data;
    }
})

function fetchCached() {
    const cachedTodos = queryClient.getQueryData(['skills']);
    console.log(cachedTodos);
}
</script>

<template>
    <div v-if="isLoading">
        <p>Loading...</p>
    </div>
    <div v-else>
        <ul>
            <li v-for="item in data" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
    <button type="button" @click="fetchCached" class="px-1 py-2 bg-blue-500">Click fetch</button>
</template>
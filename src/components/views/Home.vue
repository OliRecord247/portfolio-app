<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'

const { isLoading, data } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
        const res = await fetch("http://localhost:5000/skills");
        const data = await res.json();
        return data;
    }
})
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
</template>
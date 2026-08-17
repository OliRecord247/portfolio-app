<script lang="ts" setup>
import { useSkills } from '../composables/useSkills'

const {
    data: skills,
    isLoading,
    isError
} = useSkills();
</script>

<template>
    <div v-if="isLoading || isError">
        <p>{{(isError) ? "Error" : "Loading..."}}</p>
    </div>
    <ul class="flex gap-2 justify-center items-center">
        <li 
            v-for="skill in skills"
            class="px-2 py-1 rounded-lg bg-accent text-textLight"
        >{{skill.name}}</li>
    </ul>
</template>

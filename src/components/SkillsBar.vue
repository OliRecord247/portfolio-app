<script lang="ts" setup>
import { useSkills } from '../composables/useSkills'

const {
    data: skills,
    isLoading,
    isError
} = useSkills();
</script>

<template>
    <div v-if="isLoading || isError" class="flex justify-center items-center">
        <p>{{(isError) ? "Error&hellip;" : "Loading&hellip;"}}</p>
    </div>
    <ul v-else class="flex gap-5 flex-wrap justify-end">
        <li 
            class="px-2 py-1 rounded-lg flex gap-2 items-center bg-surface text-textLight"
            v-for="skill in skills"
            :key="skill.id"
            :title="skill.name"
        >
            <div class="px-2 py-1 rounded-lg bg-accent/80">
                <img  v-if="skill.image" :src="`/images/${skill.image}`" :alt="`${skill.name}-logo`" class="h-15"/>
                <p v-else>{{ skill.name }}</p>
            </div>
        </li>
    </ul>
</template>

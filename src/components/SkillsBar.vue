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
        <p>{{(isError) ? "Error&hellip;" : "Loading&hellip;"}}</p>
    </div>
    <ul class="flex gap-5 flex-wrap justify-end">
        <li 
            v-for="skill in skills"
            class="px-2 py-1 rounded-lg flex gap-2 items-center bg-surface text-textLight"
            :title="skill.name"
        >
            <div class="px-2 py-1 rounded-lg bg-accent/80">
                <img :src="`/images/${skill.image}`" :alt="`${skill.name}-logo`" class="h-15"/>
            </div>
            <span>{{ skill.name }}</span>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { useSkills } from '../composables/useSkills';

const {
    data: skills,
    isLoading,
    isError
} = useSkills();
</script>

<template>
    <div>
        <div v-if="isLoading || isError">
            <p>{{ isError ? 'Error' : 'Loading' }}&hellip;</p>
        </div>
        <ul v-else class="flex flex-col gap-2">
            <li class="w-full p-8 rounded-lg" v-for="skill in skills" :key="skill.name">
                <div>
                    <h3>{{ skill.name }}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>

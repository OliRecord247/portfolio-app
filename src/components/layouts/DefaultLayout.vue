<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="flex items-center flex-col">
        <header class="w-full bg-cyan-500">
            <div class="flex justify-between">
                <img alt="logo" class="h-8"/>
                <nav class="flex justify-center gap-2 bg-indigo-600">
                    <RouterLink to="/" class="px-2">Home</RouterLink>
                    <RouterLink to="/about" class="px-2">About</RouterLink>
                </nav>
            </div>
            <div class="max-w-7xl mx-auto mt-4">
                <h1 class="text-5xl font-bold">Oliver Verdesseldonck</h1>
            </div>
        </header>
        <main class="w-full flex-1 max-w-7xl mx-auto px-6 py-4">
            <slot />
        </main>
        <footer>
            <p>&copy; 2026 - Fullstack developer</p>
        </footer>
    </div>
</template>
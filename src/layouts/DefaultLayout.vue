<script setup lang="ts">
import ActionButton from '../components/ActionButton.vue';
import NavMenu from './NavMenu.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col bg-background text-textLight">
        <header class="w-full bg-surface border-b border-secondary/20 shadow-md">
            <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-3">
                    <img alt="logo" class="h-8" />
                    <span class="font-display font-bold text-lg text-primary">Portfolio</span>
                </div>
                <ActionButton type="accent">Click Me</ActionButton>
                <NavMenu />
            </div>

            <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center text-center">
                <h1 class="text-4xl sm:text-5xl font-display font-bold text-textLight tracking-tight">
                    Oliver Vredessteldonck
                </h1>
                <p class="text-secondary font-medium mt-2">Fullstack Software Developer</p>
            </div>
        </header>

        <!-- Main Content (Pagina's via slot) -->
        <main class="w-full flex-1 max-w-7xl mx-auto px-6 py-8">
            <slot />
        </main>

        <footer class="w-full bg-surface border-t border-secondary/20 py-6 px-6 mt-auto">
            <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-textLight/60">
                <p>&copy; 2026 - Oliver Vredessteldonck</p>
            </div>
        </footer>
    </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div>
        <header>
            <nav>
                <RouterLink to="">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
            <h1>Oliver Verdesseldonck</h1>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <p>&copy; 2026 - Fullstack developer</p>
        </footer>
    </div>
</template>
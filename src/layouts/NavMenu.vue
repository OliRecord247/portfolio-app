<script lang="ts" setup></script>

<style scoped>
@reference "../style.css";

.menu-link {
    @apply px-4 py-2 rounded-lg font-medium text-textLight/70 transition-all duration-200 hover:text-textLight hover:bg-surface/60;
}

.menu-link-active {
    @apply bg-primary! text-background! font-semibold shadow-sm;
}
</style>

<template>
    <div>
        <nav class="flex justify-center gap-2">
            <RouterLink to="/" class="menu-link" active-class="menu-link-active">
                Home
            </RouterLink>
            <RouterLink to="/about" class="menu-link" active-class="menu-link-active">About</RouterLink>
            <RouterLink to="/skills" class="menu-link" active-class="menu-link-active">Skills</RouterLink>
        </nav>
    </div>
</template>

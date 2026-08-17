<script lang="ts" setup>
type Styles = "primary" | "secondary" | "accent"
type Props = { type?: Styles };

withDefaults(defineProps<Props>(), {
    type: "primary"
})

const variantClasses: Record<Styles, string> = {
    primary: "bg-primary hover:bg-primary/20 text-background",
    secondary: "bg-secondary hover:bg-secondary/20 text-textLight",
    accent: "bg-accent hover:bg-accent/20 text-textLight"
}
</script>

<template>
    <button :class="['px-4 py-2 rounded-lg font-medium transition-colors', variantClasses[type]]">
        <slot />
    </button>
</template>

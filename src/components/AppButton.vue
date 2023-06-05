<template>
    <button class="btn" :class="{ 'loader': loading, 'disabled': disabled }" :disabled="isDisabled">
        <span v-if="loading" class="opacity-50">Processing</span>
        <slot v-else></slot>
    </button>
</template>

<script>
export default {
    name: "AppButton",
    props: {
        loading: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    computed: {
        isDisabled() {
            return this.loading || this.disabled
        }
    }
}
</script>

<style scoped>
button.disabled {
    @apply cursor-not-allowed opacity-50
}

.btn {
    @apply inline-flex px-6 py-1 text-white font-semibold bg-primaryColor border-primaryColor rounded-md
}


.btn>* {
    @apply shrink-0;
}

.loader {
    @apply flex items-center gap-4 before:h-5 before:w-5 before:border-4 before:border-gray-100/50 before:border-b-inherit before:border-l-inherit before:rounded-full before:animate-spin cursor-wait
}
</style>
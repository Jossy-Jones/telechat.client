<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.9999 21L16.6499 16.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</template>

<script>
export default {
    name: "Search-Icon",
    props: {
        fill: {
            type: String,
            default: 'none',
            required: false
        },
        color: {
            type: String,
            default: 'text-labelText', // green, green--outline, white
            required: false,
        },
        strokeWidth: {
            type: Number,
            default: 5,
            required: false,
        },
        size: {
            type: Number,
            default: 24,
            required: false,
        },
    },

}
</script>

<style></style>
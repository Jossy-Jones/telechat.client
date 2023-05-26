<template>
    <svg :width="size" :height="size" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 485 485" xml:space="preserve">
        <path
            d="M277.5,0C226.495,0,185,41.495,185,92.5v265c0,31.706,25.794,57.5,57.5,57.5s57.5-25.794,57.5-57.5v-265h-30v265 c0,15.164-12.336,27.5-27.5,27.5S215,372.664,215,357.5v-265c0-34.463,28.038-62.5,62.5-62.5S340,58.037,340,92.5v265 c0,53.762-43.738,97.5-97.5,97.5S145,411.262,145,357.5v-265h-30v265c0,70.304,57.196,127.5,127.5,127.5S370,427.804,370,357.5v-265 C370,41.495,328.505,0,277.5,0z" />
    </svg>
</template>

<script>
export default {
    name: "Attachment-Icon",
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
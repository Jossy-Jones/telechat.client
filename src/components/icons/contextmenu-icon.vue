<template>
    <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
        y="0px" viewBox="0 0 293.5 293.5" xml:space="preserve" fill="currentColor">
        <path
            d="M171.603,0h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705 c8.612,0,15.618-7.006,15.618-15.618V15.618C187.221,7.006,180.215,0,171.603,0z" />
        <path
            d="M171.603,106.279h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705 c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,113.285,180.215,106.279,171.603,106.279z" />
        <path
            d="M171.603,212.559h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705 c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,219.564,180.215,212.559,171.603,212.559z" />
    </svg>
</template>

<script>
export default {
    name: "Contextmenu-Icon",
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
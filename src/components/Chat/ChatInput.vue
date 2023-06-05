<template>
        <textarea rows="1" type="text" name="" id="" placeholder="Type your message here" class="chat-entry" ref="chat_input" v-model="value"></textarea>
        
</template>

<script>
import autosize from "autosize";
export default {
    name: "ChatInput",
    props: {
        inputValue: {type: String, default: ""}
    },
    emits: ["update:inputValue"],
    computed: {
        value: {
            get() {
                return (this.inputValue ?? "");
            },
            set(val) {
                this.$emit('update:inputValue', val);
            },
        },
    },
    mounted() {
        autosize(this.$refs.chat_input);
    }
}
</script>

<style scoped>

.chat-entry{
    @apply p-2 w-full outline-0 focus:outline-none bg-gray-200 rounded-md h-fit max-h-20 resize-none;
}
</style>
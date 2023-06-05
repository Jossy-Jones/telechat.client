<template>
    <div class="form-group">
        <div class="input-wrapper" :class="[(inputError && 'error')]">
            <slot name="prepend"></slot>
            <input :type="type" :name="name" :id="name" :placeholder="placeholder" :required="required" v-model="value">
            <slot name="append"></slot>
        </div>
        <span v-if="inputError" class="form-error">{{ inputError }}</span>
    </div>
</template>

<script>
export default {
    name: "App-Input",
    props: {
        inputValue: {type: String, required: true},
        name: {type: String, required: true},
        placeholder: {type: String},
        type: {type: String, default: "text"},
        required: {default: true},
        inputError: {type: String}
    },
    emits: ['update:inputValue'],
    methods: {
        out_of_focus(){
            if((typeof(this.inputValue) === 'string')&&(this.inputValue.trim().length > 0)){
                return this.suspend = true
            } else {
                return this.suspend = false
            }
        }
    },
    computed: {
        value: {
            get() {
                return (this.inputValue ?? "");
            },
            set(val) {
                this.$emit('update:inputValue', val);
            },
        },
        validInput(){
            const valid = typeof(this.inputValue) === 'string' && this.inputValue.trim().length > 0 ? true : false;
            return valid
        }
    },
}
</script>

<style scoped>
.form-group{
    @apply relative text-left;
}

.input-wrapper{
    @apply block px-4 py-2 border-2 border-gray-300 focus-within:border-primaryColor rounded;
}

.input-wrapper.error{
    @apply border-red-500;
}

.form-group input{
    @apply w-full outline-none bg-transparent
}

.form-error{
    @apply text-xs text-red-500
}
</style>
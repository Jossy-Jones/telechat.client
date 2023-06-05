<template>
    <section id="sign-up">
        <div class="wrapper">
            <div class="form-container">
                <div class="_heading">
                    <h1 class="_title">Telechat</h1>
                    <p class="font-semibold text-gray-500">Create your account</p>
                </div>
                <form id="sign_up" @submit="submitForm" novalidate>
                    <app-input :name="'fullname'" :placeholder="'Fullname'" v-model:inputValue="user.fullname" :inputError="errors.fullname"></app-input>

                    <app-input :name="'username'" :placeholder="'Username'" v-model:inputValue="user.username" :inputError="errors.username"></app-input>

                    <app-input :name="'password'" :type="'text'" :placeholder="'Password'" v-model:inputValue="user.password" :inputError="errors.password"></app-input>

                    <div>
                        <app-button class="mx-auto" :loading="processing">Create account</app-button>
                    </div>
                </form>
                <div>
                    <p>Already have an account? <router-link to="/sign-in" class="linkText">Sign in</router-link></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapActions} from "vuex"
import { toast } from "vue3-toastify";
import {validator} from '../utils/formValidator.js';

export default {
    name: "SignUp",
    data(){
        return {
            user: {
                fullname: "",
                username: "",
                password: "",
            },
            errors: {
                fullname: null,
                username: null,
                password: null,
            },
            processing: false,
        }
    },
    methods: {
        ...mapActions({
            sign_up: "auth/signUp",
        }),
        submitForm(evt){
            evt.preventDefault();

            const errors = validator.validateForm("sign_up");

            if(errors.length > 0){
                this.errors = {
                    fullname: validator.getErrorByKey(errors, "fullname"),
                    username: validator.getErrorByKey(errors, "username"),
                    password: validator.getErrorByKey(errors, "password")
                }
            } else {
                // this.processing = true;
                toast.success("Hello there");
                // this.sign_up(this.user).then(data=>{
                //     if(data.success){
                //         this.$route()
                //     } else {
                //     }
                //     this.processing = false
                // })
            }

        }
    },
    watch: {
        'user.fullname'(newValue){
            if(newValue){
                this.errors.fullname = null;
            }
        },
        'user.username'(newValue){
            if(newValue){
                this.errors.username = null;
            }
        },
        'user.password'(newValue){
            if(newValue){
                this.errors.password = null;
            }
        }
    }

}
</script>

<style scoped>
#sign-up{
    @apply bg-slate-900 fixed top-0 left-0 w-full h-full;
}

#sign-up .wrapper{
    @apply grid place-items-center h-full p-4;
}

._heading{
    @apply grid gap-2;
}

._title{
    @apply text-2xl font-semibold;
}

.form-container{
    @apply grid gap-6 p-4 w-full max-w-md mx-auto text-center bg-white rounded-md
}

.form-container form{
    @apply grid gap-4;
}

.form-group{
    @apply block px-4 py-2 border-2 border-gray-300 focus-within:border-primaryColor rounded;
}

.form-group input{
    @apply w-full outline-none bg-transparent
}

.linkText{
    @apply text-primaryColor
}

</style>
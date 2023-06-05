<template>
    <section id="sign-in">
        <div class="wrapper">
            <div class="form-container">
                <div class="_heading">
                    <h1 class="_title">Telechat</h1>
                    <p class="font-semibold text-gray-500">Sign in to your account</p>
                </div>
                <form id="sign_in" @submit="submitForm" novalidate>
                    <app-input :name="'username'" :placeholder="'Username'" v-model:inputValue="user.username" :inputError="errors.username"></app-input>

                    <app-input :name="'password'" :type="'text'" :placeholder="'Password'" v-model:inputValue="user.password" :inputError="errors.password"></app-input>

                    <div>
                        <app-button class="mx-auto" :loading="processing">Sign in</app-button>
                    </div>
                </form>
                <div>
                    <p>New here? <router-link to="/sign-up" class="linkText">Create an account</router-link></p>
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
    name: "SignIn",
    data(){
        return {
            user: {
                username: "",
                password: "",
            },
            errors: {
                username: null,
                password: null,
            },
            processing: false,
            
        }
    },
    methods: {
        ...mapActions({
            sign_in: "auth/signIn",
        }),
        async submitForm(evt){
            evt.preventDefault();

            const errors = validator.validateForm("sign_in");

            if(errors.length > 0){
                this.errors = {
                    username: validator.getErrorByKey(errors, "username"),
                    password: validator.getErrorByKey(errors, "password")
                }
            } else {
                this.processing = true;
                const response = await this.sign_in(this.user);
                console.log(response)
                if(response.succeeded){
                    this.$router.push("/")
                } else {
                    this.processing = false;
                    toast.error(response.message)
                }
                
            }

        }
    },
    watch: {
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
#sign-in{
    @apply bg-slate-900 fixed top-0 left-0 w-full h-full;
}

#sign-in .wrapper{
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

.linkText{
    @apply text-primaryColor
}

</style>
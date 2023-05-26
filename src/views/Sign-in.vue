<template>
    <section id="sign-in">
        <div class="wrapper">
            <div class="form-container">
                <div class="_heading">
                    <h1 class="_title">Telechat</h1>
                    <p class="font-semibold text-gray-500">Sign in to your account</p>
                </div>
                <form>
                    <div class="form-group">
                        <input type="text" name="username" id="username" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <input type="text" name="username" id="username" placeholder="Password">
                    </div>
                    <div>
                        <button class="btn">Sign in</button>
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
export default {

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

.form-group{
    @apply block px-4 py-2 border-2 border-gray-300 focus-within:border-primaryColor rounded;
}

.form-group input{
    @apply w-full outline-none bg-transparent
}

.btn{
    @apply inline-block px-6 py-1 text-white font-semibold bg-primaryColor border-primaryColor rounded-md
}

.linkText{
    @apply text-primaryColor
}

</style>
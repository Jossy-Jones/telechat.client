<template>
    <div>
        <div class="_header">
            <div class="app-search">
                <input type="text" name="search" id="search" placeholder="Search chat"
                    class="w-full outline-0 focus:outline-none">
                <button type="submit" class="">
                    <span class="hover:text-primaryColor">
                        <search-icon :size="20" />
                    </span>
                </button>
            </div>
        </div>
        <div class="_list">
            <div class="_list-item active">
                <div class="user-avatar">
                    <img src="/images/image-1.jpg" alt="profile 1">
                </div>
                <div class="_content">
                    <div class="user-info">
                        <h2 class="username">Ominous Rex</h2>
                        <span class="last-seen">Yesterday</span>
                    </div>
                    <p class="last-entry">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Vero harum quaerat, illum dolorem quam perspiciatis repellendus, natus eveniet sit
                        numquam tempore dignissimos quasi sed commodi, molestiae distinctio impedit consectetur
                        iusto.</p>
                </div>
            </div>
            <div class="_list-item">
                <div class="user-avatar">
                    <img src="/images/image-2.jpg" alt="profile 1">
                </div>
                <div class="_content">
                    <div class="user-info">
                        <h2 class="username">Ominous Rex</h2>
                        <span class="last-seen">Yesterday</span>
                    </div>
                    <p class="last-entry">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Vero harum quaerat, illum dolorem quam perspiciatis repellendus, natus eveniet sit
                        numquam tempore dignissimos quasi sed commodi, molestiae distinctio impedit consectetur
                        iusto.</p>
                </div>
            </div>
            <div class="_list-item">
                <div class="user-avatar">
                    <img src="/images/image-3.jpg" alt="profile 1">
                </div>
                <div class="_content">
                    <div class="user-info">
                        <h2 class="username">Ominous Rex</h2>
                        <span class="last-seen">Yesterday</span>
                    </div>
                    <p class="last-entry">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Vero harum quaerat, illum dolorem quam perspiciatis repellendus, natus eveniet sit
                        numquam tempore dignissimos quasi sed commodi, molestiae distinctio impedit consectetur
                        iusto.</p>
                </div>
            </div>
            <div class="_list-item">
                <div class="user-avatar">
                    <img src="/images/image-4.jpg" alt="profile 1">
                </div>
                <div class="_content">
                    <div class="user-info">
                        <h2 class="username">Ominous Rex</h2>
                        <span class="last-seen">Yesterday</span>
                    </div>
                    <p class="last-entry">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Vero harum quaerat, illum dolorem quam perspiciatis repellendus, natus eveniet sit
                        numquam tempore dignissimos quasi sed commodi, molestiae distinctio impedit consectetur
                        iusto.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import searchIcon from "./icons/search-icon.vue"
</script>

<style scoped>
._header{
    @apply py-2 px-4 border-b;
}
.app-search{
    @apply flex py-2 px-3 gap-1 items-center text-sm border rounded-xl focus-within:border-primaryColor;
}

._list{
    @apply py-2 px-4;
}
._list-item{
    @apply flex items-center gap-2 p-2 rounded-md w-full my-2 hover:bg-primaryColor/20 cursor-pointer;
}
._list-item.active{
    @apply bg-primaryColor/20;
}
._content{
    @apply relative truncate;
}
.user-avatar{
    @apply relative w-12 h-12 rounded-md overflow-hidden shrink-0;
}
.user-avatar img{
    @apply w-full h-full object-cover;
}
.user-info{
    @apply flex items-center justify-between;
}
.username{
    @apply font-bold;
}
.last-seen{
    @apply text-xs text-gray-400 font-semibold;
}
.last-entry{
    @apply text-sm font-medium _content;
}
</style>
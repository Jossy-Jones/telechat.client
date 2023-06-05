<template>
  <div class="app-container">
    <div class="">
      <chat-list />
    </div>
    <chat-view class="chat-view" />
  </div>
</template>

<script>
import ChatList from '../components/Chat/ChatList.vue';
import ChatView from '../components/Chat/ChatView.vue';
export default {
  components: { ChatList, ChatView }

}
</script>

<style scoped>
.app-container {
  @apply h-full grid sm:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto divide-x border overflow-hidden;
}

.chat-view {
  @apply lg:col-span-2 max-h-screen
}
</style>
<template>
    <div class="chat-view">
        <div class="_header">
            <div class="wrapper">
                <div class="user-info">
                    <h2 class="username">Ominous Rex</h2>
                    <span class="chat-status">Yesterday</span>
                </div>
                <label class="context_menu">
                    <contextmenu-icon :size="20"/>
                </label>
            </div>
        </div>
        <div class="_content">
            <div class="message-item incoming">
                <div class="chat-bubble">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint nisi quod at aliquam eos
                        cupiditate vero architecto sed ipsum. Eius necessitatibus eaque veniam molestiae. Ea
                        rerum eos id quisquam?</p>
                </div>
                <div class="message-info">
                    <span class="message-time">Today 02:50 PM</span>
                </div>
            </div>
            <div class="message-item outgoing">
                <div class="chat-bubble">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="message-info">
                    <span class="message-time">Today 02:50 PM</span> •
                    <span class="inline-block text-green-500">
                        <check-icon :size="14"/>
                    </span>
                </div>
            </div>
            <div class="message-item incoming">
                <div class="chat-bubble">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint nisi quod at aliquam eos
                        cupiditate vero architecto sed ipsum. Eius necessitatibus eaque veniam molestiae. Ea
                        rerum eos id quisquam?</p>
                </div>
                <div class="message-info">
                    <span class="message-time">Today 02:50 PM</span>
                </div>
            </div>
            <div class="message-item incoming">
                <div class="chat-bubble">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint nisi quod at aliquam eos
                        cupiditate vero architecto sed ipsum. Eius necessitatibus eaque veniam molestiae. Ea
                        rerum eos id quisquam?</p>
                </div>
                <div class="message-info">
                    <span class="message-time">Today 02:50 PM</span>
                </div>
            </div>
            <div class="message-item incoming">
                <div class="chat-bubble">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint nisi quod at aliquam eos
                        cupiditate vero architecto sed ipsum. Eius necessitatibus eaque veniam molestiae. Ea
                        rerum eos id quisquam?</p>
                </div>
                <div class="message-info">
                    <span class="message-time">Today 02:50 PM</span>
                </div>
            </div>
            <div class="message-item incoming">
                <div class="chat-bubble">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint nisi quod at aliquam eos
                        cupiditate vero architecto sed ipsum. Eius necessitatibus eaque veniam molestiae. Ea
                        rerum eos id quisquam?</p>
                </div>
                <div class="message-info">
                    <span class="message-time">Today 02:50 PM</span>
                </div>
            </div>
            <div class="message-item incoming">
                <div class="chat-bubble">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint nisi quod at aliquam eos
                        cupiditate vero architecto sed ipsum. Eius necessitatibus eaque veniam molestiae. Ea
                        rerum eos id quisquam?</p>
                </div>
                <div class="message-info">
                    <span class="message-time">Today 02:50 PM</span>
                </div>
            </div>
        </div>
        <div class="_footer">
            <div class="wrapper">
                <label for="fileButton" class="entry-icons">
                    <attachment-icon :size="20" />
                </label>
                <input type="file" name="file" id="fileButton" hidden>
                <chat-input v-model:inputValue="message"/>
                <label for="" class="entry-icons">
                    <send-icon :size="20" v-if="entry"/>
                    <microphone-icon :size="20" v-else />
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import socket from "../../services/eventService.js";
import ChatInput from "./ChatInput.vue";
import CheckIcon from '../icons/check-icon.vue';
import ContextmenuIcon from '../icons/contextmenu-icon.vue';
import AttachmentIcon from '../icons/attachment-icon.vue';
import MicrophoneIcon from '../icons/microphone-icon.vue';
import SendIcon from '../icons/send-icon.vue';

export default {
    components: {CheckIcon, ContextmenuIcon, AttachmentIcon, MicrophoneIcon, SendIcon, ChatInput},
    data(){
        return {
            message: "",
            entry: false,
            typing: false,
        }
    },
    methods: {
        sendMessage(){
            socket.emit("chat:outbound", {
                message
            })
        }
    },
    watch: {
        'message'(newValue){
            if(newValue){
                return (newValue.length > 0) ? (this.entry = true) : (this.entry = false);
            } else {
                return (this.message.length > 0) ? (this.entry = true) : (this.entry = false);
            }
        }
    }
}
</script>

<style scoped>
.chat-view{
    @apply relative grid grid-rows-[min-content_1fr_min-content] h-full bg-slate-900 overflow-hidden
}

._header{
    @apply relative w-full place-self-start;
}

._header .wrapper{
    @apply relative flex items-center justify-between px-4 py-2 bg-white;
}

.user-info{
    @apply grid;
}

.username{
    @apply font-semibold text-base;
}

.chat-status{
    @apply inline-block text-xs text-gray-400 font-semibold -mt-0.5;
}

.context_menu{
    @apply text-gray-500 cursor-pointer;
}

._content{
    @apply relative w-full p-4 flex flex-col-reverse gap-4 overflow-auto
}

.message-item.incoming{
    @apply grid gap-2 max-w-[60%]
}

.message-item.incoming .chat-bubble{
    @apply inline-block p-3 bg-blue-100 rounded-3xl rounded-bl-none;
}

.message-item.incoming .message-info{
    @apply flex items-center gap-2 place-self-start text-gray-500;
}

.message-item.outgoing{
    @apply grid gap-2 place-self-end max-w-[60%]
}

.message-item.outgoing .chat-bubble{
    @apply inline-block p-3 bg-blue-300 rounded-3xl rounded-br-none float-right;
}

.message-item.outgoing .message-info{
    @apply flex items-center gap-2 place-self-end text-gray-500;
}

.message-time{
    @apply text-xs text-gray-500 font-semibold;
}

._footer{
    @apply relative w-full place-self-end;
}

._footer .wrapper {
    @apply flex items-center gap-2 p-2 bg-white;
}

.entry-icons{
    @apply inline-flex justify-center w-10 text-gray-500 cursor-pointer;
}

</style>
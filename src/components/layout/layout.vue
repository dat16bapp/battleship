<template>
    <div class="content">
        <div class="container">
            <top-menu></top-menu>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import topMenu from '@/components/layout/topMenu.vue'
    export default {
        components: {
            topMenu
        }
    }
</script>

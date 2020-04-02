<template>
    <div id="app">
        <NavMenuBar></NavMenuBar>
        <router-view />
    </div>
</template>

<script>
import NavMenuBar from './components/NavMenuBar.vue'

export default {
    name: 'app',
    components: {
        NavMenuBar
    }
}
</script>

<style></style>

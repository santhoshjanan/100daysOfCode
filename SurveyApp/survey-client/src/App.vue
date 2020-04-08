<template>
    <div id="app" class="h-full">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'app',
    components: {},
    computed: { ...mapGetters(['token', 'userDetails', 'authenticated']) },
    methods: {
        ...mapActions(['AUTOLOGIN']),
    },
    created() {
        this.AUTOLOGIN()
            .then(() => {
                if (this.$router.currentRoute.path !== '/dashboard')
                    this.$router.push('/dashboard');
            })
            .catch((err) => {});
    },
};
</script>

<style></style>

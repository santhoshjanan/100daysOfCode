<template>
    <div>
        <Header></Header>
        <SideNav></SideNav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Header from '@/components/Header.vue';
import SideNav from '@/components/SideNav.vue';
export default {
    components: {
        Header,
        SideNav,
    },
    computed: { ...mapGetters(['token', 'userDetails', 'authenticated']) },

    mounted() {
        if (!this.authenticated) this.$router.push('/');
    },
};
</script>

<style lang="scss" scoped></style>

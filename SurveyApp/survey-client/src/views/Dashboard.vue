<template>
    <div>
        <Header></Header>
        <el-container>
            <el-aside>
                <SideNav></SideNav>
            </el-aside>
            <el-main class="w-full bg-green-400 -ml-12">
                <router-view></router-view>
            </el-main>
        </el-container>
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

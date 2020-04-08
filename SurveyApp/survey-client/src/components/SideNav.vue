<template>
    <div>
        <!-- <div>
            <el-radio-group v-model="isCollapse" style="margin-bottom: 0px;">
                <el-radio-button :label="true">collapse</el-radio-button>
                <el-radio-button :label="false">expand</el-radio-button>
            </el-radio-group>
        </div> -->
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="false"
            :router="true"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">Surveys</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">Group One</span>
                    <el-menu-item index="/dashboard">Survey list</el-menu-item>
                    <el-menu-item index="/dashboard/survey/create"
                        >Create Survey</el-menu-item
                    >
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span slot="title">Patients</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">Group One</span>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-user"></i>
                    <span slot="title">Agents</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">Group One</span>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            isCollapse: false,
        };
    },
    computed: {
        ...mapGetters([
            'token',
            'userDetails',
            'authenticated',
            'collapseStateChanged',
        ]),
    },
    mounted() {
        this.isCollapse = this.collapseStateChanged;
    },
    watch: {
        isCollapse(collapseStateChanged) {
            this.UIEXPANDSIDENAV(!collapseStateChanged);
        },
    },
    methods: {
        ...mapActions(['UIEXPANDSIDENAV']),

        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
    min-height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 100vh;
}
.width-300 {
    width: 300px;
    background: #fff;
    transition: 0.5s ease-in;
}
.el-menu {
    border: 0px;
}
</style>

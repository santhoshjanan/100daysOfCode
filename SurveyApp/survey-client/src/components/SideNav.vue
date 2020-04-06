<template>
    <div>
        <div v-bind:class="{ 'width-300': !isCollapse }">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 0px;">
                <el-radio-button :label="true">collapse</el-radio-button>
                <el-radio-button :label="false">expand</el-radio-button>
            </el-radio-group>
        </div>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">Surveys</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">Group One</span>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
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
export default {
    data() {
        return {
            isCollapse: true,
        };
    },
    methods: {
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
    width: 300px;
    min-height: 100vh;
}
.width-300 {
    width: 300px;
    background: #fff;
    transition: 0.5s ease-in;
}
</style>

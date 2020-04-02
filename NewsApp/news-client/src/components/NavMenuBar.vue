<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-menu-item index="top-headline">Top Headlines</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Categories</template>
                <el-menu-item
                    v-for="category in categories"
                    :key="category"
                    :index="category"
                    >{{ category | titlecase }}</el-menu-item
                >
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import axios from 'axios'
import { eventBus } from '@/main'

export default {
    name: 'NavMenuBar',
    mounted() {
        axios
            .get('/news/sourcedetails?q=category')
            .then(response => {
                this.categories = response.data
            })
            .catch(err => {
                console.error(err)
            })
    },
    data() {
        return {
            activeIndex: 'top-headline',
            categories: []
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            eventBus.$emit('loadNews', { newssource: key })
            console.log({ newssource: key })
        }
    }
}
</script>

<style lang="scss"></style>

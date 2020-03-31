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
            <el-menu-item index="TopHeadlines">Top Headlines</el-menu-item>
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
            activeIndex: '1',
            categories: []
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>

<style lang="scss"></style>

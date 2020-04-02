<template>
    <div class="bg-green-300 h-full flex flex-wrap -mx-2  mb-8">
        <NewsBlock
            v-for="newsitem in news"
            :key="newsitem.url + Math.random()"
            :article="newsitem"
        >
        </NewsBlock>
    </div>
</template>

<script>
// @ is an alias to /src
import { eventBus } from '@/main'
import axios from 'axios'
import NewsBlock from '@/components/NewsBlock.vue'

export default {
    name: 'Home',
    props: [],
    components: {
        NewsBlock
    },
    data() {
        return {
            newssource: 'top-headline',
            sourceurl: null,
            news: []
        }
    },
    mounted() {
        this.newssource = 'top-headline'
        this.fetchNews()
    },
    methods: {
        fetchNews() {
            console.log(this.newssource.newssource)
            switch (this.newssource.newssource) {
                case 'top-headline':
                    this.sourceurl = '/news/topheadlines'
                    break
                case 'general':
                    this.sourceurl = '/news'
                    break

                default:
                    this.sourceurl = '/news?q=' + this.newssource.newssource
                    break
            }
            axios
                .get(this.sourceurl)
                .then(response => {
                    console.log(response)
                    this.news = response.data.data.articles
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    watch: {
        newssource(val) {
            this.fetchNews()
        }
    },
    created() {
        eventBus.$on('loadNews', data => {
            this.newssource = data
        })
    }
}
</script>

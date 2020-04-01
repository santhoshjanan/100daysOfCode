<template>
    <div class="m-4">
        <a :href="article.url">
            <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                    class="w-full"
                    :src="
                        article.urlToImage ||
                            'https://source.unsplash.com/random/480x320'
                    "
                    :alt="article.description"
                />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        {{ article.title }}
                    </div>
                    <p class="text-gray-700 text-base">
                        {{ article.description }}
                    </p>
                </div>
                <div class="px-6 py-4 flex justify-evenly">
                    <span class="text-xs w-full text-left"
                        >{{ article.author }}, {{ article.source.name }}</span
                    >
                    <span class="text-xs w-full text-right">
                        {{
                            article.publishedAt
                                | moment('ddd Do MMM YY, hh:mm:ss')
                        }}
                    </span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'NewsBlock',
    props: ['article']
}
</script>

<style lang="scss" scoped></style>

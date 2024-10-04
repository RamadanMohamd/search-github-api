<template>
    <v-card class="mx-auto overflow-auto" :loading="isLoading" outlined>
        <div class="pa-4 position-sticky top-0 bg-secondary z-index-200">
            {{ language }}
        </div>
        <div :id="language" class="d-flex flex-column overflow-auto" style="max-height: calc(33vh)">
            <template v-if="repoStore.repositories &&
                Array.isArray(repoStore.repositories[language]) &&
                repoStore.repositories[language][0]
                ">
                <RepositoryDetails v-for="(repo, index) in repoStore.repositories[language][0]" :repo="repo"
                    :key="language + index" :id="`${language}-${index}`" />
            </template>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'
import { useRepositoriesStore } from '@/stores/repos'
import type { ParamsType } from '@/types/search'
import { watch } from 'vue'
import { onMounted, ref, defineAsyncComponent } from 'vue'
const RepositoryDetails = defineAsyncComponent(
    () => import('@/components/LanguageDisplay/RepositoryDetails.vue')
)

const { language, stars, dates } = defineProps<{
    language: string,
    dates: Date[],
    stars: number[]
}>()

const repoStore = useRepositoriesStore()
const url = 'https://api.github.com/search/repositories'
const queryParams = ref<ParamsType>({
    q: `language:${language} stars:${stars[0]}..${stars[1]} created:${dates[0].toISOString()}..${dates[1].toISOString()}`,
    sort: 'stars',
    order: 'desc',
    per_page: 10,
    page: 1
})

const { data, count, isLoading, fetchRepos } = useFetch(url, queryParams.value)

const infiniteScroll = (
    language: string,
    fetchRepos: (url: string, params: ParamsType) => void
): void => {
    const element: HTMLElement | null = document.getElementById(language)
    const hasMore = true
    if (element) {
        element.addEventListener('scroll', () => {
            if (element.scrollTop + element.clientHeight >= element.scrollHeight && hasMore) {
                queryParams.value.page = queryParams.value.page + 1
                fetchRepos(url, queryParams.value)
            }
        })
    }
}

onMounted(() => {
    infiniteScroll(language, fetchRepos)
})

watch(data, () => {
    if (data.value && Array.isArray(data.value))
        repoStore.updateRepositories(language, data.value, count.value)
})

</script>

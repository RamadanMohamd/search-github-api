<template>
    <v-navigation-drawer v-model="drawerStore.isDrawerOpen" :width="400" :border="0">
        <div class="px-4 d-flex align-center justify-center border-b bg-secondary mb-6" style="height: 65px">
            <v-card-text color="primary" class="text-center font-weight-bold font-size-24">
                Filter Repositories</v-card-text>
        </div>
        <language-search />
        <date-inputs />
        <stars-inputs />
        <v-col cols="12">
            <v-btn size="x-large" color="secondary" block @click="search">Search Repositories</v-btn>
        </v-col>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useDrawerStore } from '@/stores/drawer'
import { useFilterStore } from '@/stores/filters'
import { useRepositoriesStore } from '@/stores/repos'

const LanguageSearch = defineAsyncComponent(
    () => import("@/components/Filter/LanguageSearch.vue"),
);
const DateInputs = defineAsyncComponent(
    () => import("@/components/Filter/DateInputs.vue"),
);
const StarsInputs = defineAsyncComponent(
    () => import("@/components/Filter/StarsInputs.vue"),
);

const drawerStore = useDrawerStore()
const filterStore = useFilterStore()
const repoStore = useRepositoriesStore()

const search = () => {
    repoStore.filters = null;
    repoStore.repositories = {}
    repoStore.filters = {
        selectedLanguages: [...filterStore.selectedLanguages],
        dates: [...filterStore.dates],
        stars: [...filterStore.stars]
    }
}

</script>

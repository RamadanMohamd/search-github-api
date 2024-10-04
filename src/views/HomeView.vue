<template>
  <Default>
    <v-row class="ma-2 mt-7"
      v-if="repoStore.filters && Array.isArray(repoStore.filters.selectedLanguages) && repoStore.filters.selectedLanguages.length > 0">
      <v-col v-for="(language, index) in repoStore.filters.selectedLanguages" :key="language + index" cols="12" md="6">
        <LanguagesRespositories :language="language" :dates="repoStore.filters.dates" :stars="repoStore.filters.stars" />
      </v-col>
    </v-row>
  </Default>
</template>

<script setup lang="ts">
import Default from '../layouts/Default.vue';
import { defineAsyncComponent } from 'vue';
import { useRepositoriesStore } from '@/stores/repos';
import { useFilterStore } from '@/stores/filters';
const LanguagesRespositories = defineAsyncComponent(
  () => import("@/components/LanguageDisplay/LanguagesRespositories.vue"),
);
const repoStore = useRepositoriesStore();

</script>
<template>
    <v-col v-if="filterStore.selectedLanguages.length > 0" class="my-0 py-0" cols="12">
        <div class="d-flex flex-wrap gap-2">
            <!-- <LanguageSelector /> -->
            <template v-for="language in filterStore.selectedLanguages" :key="language">
                <v-chip color="primary" class="ma-2" closable @click:close="handleRemoveLanguage(language)">
                    {{ language }}
                </v-chip>
            </template>
        </div>
    </v-col>

    <v-col cols="12">
        <v-autocomplete v-model="filterStore.selectedLanguages" multiple variant="solo" label="Languages" hide-selected
            :items="languages">
        </v-autocomplete>
    </v-col>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFilterStore } from '@/stores/filters';
const filterStore = useFilterStore();
const handleRemoveLanguage = (language: string) => {
    filterStore.removeLanguage(filterStore.selectedLanguages.indexOf(language))
}
const languages = ref<string[]>([
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Go",
    "Swift",
    "Kotlin",
]);

</script>
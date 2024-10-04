<template>
    <v-list-item :id="`collapse-${id}`" three-line class="border ma-4 rounded overflow-shadow">
        <div class="d-flex align-center justify-space-between mt-4">
            <v-list-item-title>
                <a :href="repo.html_url" target="_blank"> {{ repo.name }} </a>
            </v-list-item-title>
            <v-list-item-subtitle>
                Stars: {{ repo.stargazers_count }}
            </v-list-item-subtitle>
        </div>

        <v-card-actions class="px-0 cursor-pointer" @click="handleCollapse">
            <v-btn color="lighten-2" class="pa-0">
                Description
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text class="px-0">
                    {{ repo.description }}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-list-item>
</template>

<script setup lang="ts">
import type { RepositoryType } from '@/types/repo';
import { ref } from 'vue'

const { id } = defineProps<{
    id: string;
    repo: RepositoryType
}>();

const show = ref<boolean>(false);
const handleCollapse = () => {
    show.value = !show.value;
    document.querySelector(`#collapse-${id}`)?.scrollIntoView({ behavior: 'smooth' });
}
</script>
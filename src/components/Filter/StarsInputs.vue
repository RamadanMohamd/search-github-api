<template>
    <v-row class="ma-0">
        <v-col cols="6" class="m-0">
            <v-text-field v-model="filterStore.stars[0]" label="Stars from" variant="solo"></v-text-field>
        </v-col>
        <v-col cols="6" class="m-0">
            <v-text-field v-model="filterStore.stars[1]" label="Stars To" variant="solo"></v-text-field>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { useFilterStore } from '@/stores/filters';
const filterStore = useFilterStore();
</script>
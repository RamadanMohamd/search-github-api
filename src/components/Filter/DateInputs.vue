<template>
    <v-row class="ma-0">
        <v-col cols="6">
            <v-date-input v-model="filterStore.dates[0]" label="Date from" mode-icon="" color="primary" prepend-icon=""
                prepend-inner-icon="" variant="solo">
            </v-date-input>
        </v-col>
        <v-col cols="6">
            <v-date-input v-model="filterStore.dates[1]" label="Date to" mode-icon="" color="primary" prepend-icon=""
                prepend-inner-icon="" variant="solo">
            </v-date-input>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { useFilterStore } from '@/stores/filters';
const filterStore = useFilterStore();
</script>
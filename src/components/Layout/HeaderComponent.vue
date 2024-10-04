<template>
    <v-app-bar color="secondary" elevation="0" class="border-b">
        <v-app-bar-nav-icon variant="text"
            @click.stop="drawerStore.isDrawerOpen = !drawerStore.isDrawerOpen"></v-app-bar-nav-icon>
        <v-toolbar-title> Search Results</v-toolbar-title>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useDrawerStore } from '@/stores/drawer';

const drawerStore = useDrawerStore();
</script>
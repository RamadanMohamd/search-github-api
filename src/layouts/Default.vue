<template>
    <v-layout class="rounded rounded-md">
        <drawer-component />
        <header-component />
        <v-main class="d-flex align-center justify-center overflow-hidden">
            <slot></slot>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import HeaderComponent from '@/components/Layout/HeaderComponent.vue'
const DrawerComponent = defineAsyncComponent(
    () => import("@/components/Layout/DrawerComponent.vue"),
);

</script>

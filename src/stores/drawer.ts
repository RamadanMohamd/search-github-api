import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', () => {
  const isDrawerOpen = ref<boolean>(true)

  return { isDrawerOpen }
})

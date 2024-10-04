import { ref } from 'vue'
import { defineStore } from 'pinia'
import moment from 'moment'

export const useFilterStore = defineStore('filter', () => {
  const selectedLanguages = ref<string[]>([])
  const stars = ref<[number, number]>([1, 100])
  const dates = ref<[Date, Date]>([moment().subtract(1, 'months').toDate(), moment().toDate()])

  function removeLanguage(index: number) {
    selectedLanguages.value.splice(index, 1)
  }

  return { selectedLanguages, removeLanguage, stars, dates }
})

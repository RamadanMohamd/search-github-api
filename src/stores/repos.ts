import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { RepositoryType } from '@/types/repo'
export const useRepositoriesStore = defineStore('repositories', () => {
  const filters = ref<{
    selectedLanguages: string[]
    dates: [Date, Date]
    stars: [number, number]
  } | null>(null)

  const repositories = ref<Record<string, [RepositoryType[], number]>>({})

  function updateRepositories(key: string, repos: RepositoryType[], count: number) {
    if (!repositories.value) {
      repositories.value = {}
    }
    if (repositories.value[key]) {
      repositories.value[key][0] = [...repositories.value[key][0], ...repos]
    } else {
      repositories.value[key] = [repos, count]
    }
  }

  return { filters, repositories, updateRepositories }
})

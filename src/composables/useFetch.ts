import { onMounted, ref } from 'vue'
import axios from 'axios'
import type { RepositoryType } from '@/types/repo'
import type { ParamsType } from '@/types/search'

export function useFetch(url: string, params: ParamsType) {
  const data = ref<RepositoryType[]>()
  const isLoading = ref<boolean>(true)
  const count = ref<number>(0)
  const error = ref(null)

  const fetchRepos = (url: string, params: ParamsType) => {
    // if (count.value && 10 * params.page >= count.value) {
    //   console.log('No need to fetch more data')
    //   return
    // }

    isLoading.value = true

    axios(url, { params })
      .then((response) => {
        data.value = response.data.items
        count.value = response.data.total_count
        isLoading.value = false
      })
      .catch((error) => {
        console.log(error)
        error.value = error
        isLoading.value = false
      })
  }

  onMounted(() => {
    fetchRepos(url, params)
  })

  return { data, count, error, isLoading, fetchRepos }
}

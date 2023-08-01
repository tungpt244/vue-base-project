import type { User } from '@/types'
import api from '@proxy/config'

export const getUser = async (id: number) => {
  const result = await api.get<User>(`/users/${id}`)
  return result.data
}

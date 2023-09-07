import type { User } from '@/types'
import fetch from '@/repository'

export const getUserData = ({ id }: { id: number }) => {
  return fetch<User>(`/users/${id}`)
}

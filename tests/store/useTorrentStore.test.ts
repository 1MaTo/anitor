import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, expect, it } from 'vitest'
import { useTorrentStore } from '~/store/useTorrentStore'

beforeEach(() => {
  setActivePinia(createPinia())
})

it('Set search text', () => {
  const store = useTorrentStore()
  expect(store.searchText).toBe('')
  const value = 'Naruto'
  store.setSearchText(value)
  expect(store.searchText).toBe(value)
})

it('Set blu ray filter', () => {
  const store = useTorrentStore()
  expect(store.bluRayFilter).toBe(true)
  const value = false
  store.setBluRayFilter(value)
  expect(store.bluRayFilter).toBe(value)
})

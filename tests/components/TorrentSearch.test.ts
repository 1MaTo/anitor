import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'
import { beforeEach, expect, it } from 'vitest'
import { useTorrentStore } from '~/store/useTorrentStore'
import Component from '~/components/TorrentSearch.vue'

beforeEach(() => {
  setActivePinia(createPinia())
})

it('Set store search text', async () => {
  const store = useTorrentStore()
  const wrapper = mount(Component)

  expect(store.searchText).toBe('')

  const value = 'test-input-value'
  wrapper.find('input').setValue(value)
  await wrapper.find('input').trigger('keydown', { key: 'enter' })

  expect(store.searchText).toBe(value)
})

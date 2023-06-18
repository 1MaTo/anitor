import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Component from '~/components/ui/TorrentStatusTag.vue'
import en from '~/locales/en'

it('Hidden when status is Default', () => {
  expect(Component).toBeTruthy()
  const value = TorrentStatus.Default
  const wrapper = mount(Component, { props: { status: value } })

  expect(wrapper.element.innerHTML).toBe(undefined)
})

it('Valid text for danger status', () => {
  expect(Component).toBeTruthy()
  const value = TorrentStatus.Danger
  const localizedValue = en.nyaa['torrent-status'].danger
  const wrapper = mount(Component, { props: { status: value } })

  expect(wrapper.html()).contain(localizedValue)
})

it('Valid text for success status', () => {
  expect(Component).toBeTruthy()
  const value = TorrentStatus.Success
  const localizedValue = en.nyaa['torrent-status'].success
  const wrapper = mount(Component, { props: { status: value } })

  expect(wrapper.html()).contain(localizedValue)
})

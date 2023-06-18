import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Component from '~/components/ui/TorrentSubCategoryTag.vue'
import en from '~/locales/en'
import { TorrentSubCategory } from '~/types/nyaa'

it('Valid localized text for category', () => {
  expect(Component).toBeTruthy()
  const value = TorrentSubCategory.AMV
  const localizedValue = en.nyaa['sub-category'][value]
  const wrapper = mount(Component, { props: { category: value } })

  expect(wrapper.html()).contain(localizedValue)
})

it('Hidden when invalid category', () => {
  expect(Component).toBeTruthy()
  const wrapper = mount(Component)

  expect(wrapper.element.innerHTML).toBe(undefined)
})

import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Component from '~/components/ui/LeechersTag.vue'
import en from '~/locales/en'

it('Has count text', () => {
  expect(Component).toBeTruthy()
  const value = 231
  const wrapper = mount(Component, { props: { count: value } })

  expect(wrapper.html()).contain(value)
})

it('Has valid EN title', () => {
  expect(Component).toBeTruthy()
  const value = 23
  const localeTitle = en.leecher.split(' | ')[1]
  const wrapper = mount(Component, { props: { count: value } })

  expect(wrapper.attributes('title')).toBe(localeTitle)
})

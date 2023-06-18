import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Component from '~/components/ui/DateTag.vue'
import en from '~/locales/en'

it('Has localized date string', () => {
  expect(Component).toBeTruthy()
  const value = new Date()
  const wrapper = mount(Component, { props: { date: value } })

  expect(wrapper.html()).contain(value.toLocaleString())
})

it('Has valid EN title', () => {
  expect(Component).toBeTruthy()
  const titleString = en['upload-date']
  const wrapper = mount(Component)

  expect(wrapper.attributes('title')).contain(titleString)
})

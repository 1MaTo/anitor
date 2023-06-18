import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Component from '~/components/ui/FileSizeTag.vue'
import en from '~/locales/en'

it('Show size value', () => {
  expect(Component).toBeTruthy()
  const value = '10.2 MiB'
  const wrapper = mount(Component, { props: { fileSize: value } })

  expect(wrapper.html()).contain(value.toLocaleString())
})

it('Has valid EN title', () => {
  expect(Component).toBeTruthy()
  const titleString = en.size
  const wrapper = mount(Component)

  expect(wrapper.attributes('title')).contain(titleString)
})

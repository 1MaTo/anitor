import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Component from '~/components/ui/NoItemsPlaceholder.vue'

it('Has valid text', () => {
  expect(Component).toBeTruthy()
  const value = 'Test label'
  const wrapper = mount(Component, { props: { label: value } })

  expect(wrapper.html()).contain(value)
})

it('Has valid text when label prop not set', () => {
  expect(Component).toBeTruthy()
  const value = 'No items found'
  const wrapper = mount(Component)

  expect(wrapper.html()).contain(value)
})

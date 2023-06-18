import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Component from '~/components/ui/InlineSwitch.vue'

const labelSelector = '[data-testid=switch-label]'

it('Show label', () => {
  expect(Component).toBeTruthy()
  const value = 'Test'
  const wrapper = mount(Component, { props: { label: 'Test' } })

  expect(wrapper.find(labelSelector).html()).contain(value)
})

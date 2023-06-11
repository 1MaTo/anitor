import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import SearchField from '@/components/ui/SearchField.vue'

const searchButtonSelector = '[data-testid=search-button]'
const inputSelector = 'input'

it('Setup default input if exist', () => {
  const defaultValue = 'test-value'
  expect(SearchField).toBeTruthy()
  const wrapper = mount(SearchField, { props: { modelValue: defaultValue } })

  expect(wrapper.find(inputSelector)).toBeTruthy()
  expect(wrapper.find(inputSelector).element.value).toBe(defaultValue)
})

it('Emits Submit on Enter key down', async () => {
  expect(SearchField).toBeTruthy()
  const wrapper = mount(SearchField)

  await wrapper.find(inputSelector).trigger('keydown', { key: 'Enter' })

  expect(wrapper.emitted().submit).toHaveLength(1)
})

it('Emits Submit on Button click', async () => {
  expect(SearchField).toBeTruthy()
  const wrapper = mount(SearchField)

  await wrapper.find(searchButtonSelector).trigger('click')

  expect(wrapper.emitted().submit).toHaveLength(1)
})

it('Change inputValue on change', async () => {
  expect(SearchField).toBeTruthy()
  const wrapper = mount(SearchField)

  const value = 'test-value-for-checking'

  await wrapper.find(inputSelector).setValue(value)

  expect(wrapper.find(inputSelector).element.value).toContain(value)
})

it('Focus when press focus hotkey', async () => {
  expect(SearchField).toBeTruthy()
  const wrapper = mount(SearchField, { attachTo: document.body })

  await wrapper.trigger('keydown', { key: '/' })

  expect(wrapper.find(inputSelector).html()).toBe(document.activeElement?.outerHTML)
})

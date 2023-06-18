import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import CompleteDownloadsTag from '~/components/ui/CompleteDownloadsTag.vue'
import en from '~/locales/en'

it('Has count value', () => {
  expect(CompleteDownloadsTag).toBeTruthy()
  const countValue = 13415648
  const wrapper = mount(CompleteDownloadsTag, { props: { count: countValue } })

  expect(wrapper.html()).contain(countValue)
})

it('Has count value', () => {
  expect(CompleteDownloadsTag).toBeTruthy()
  const countValue = 13415648
  const wrapper = mount(CompleteDownloadsTag, { props: { count: countValue } })

  expect(wrapper.html()).contain(countValue)
})

it('Has valid EN title', () => {
  expect(CompleteDownloadsTag).toBeTruthy()
  const titleString = en.nyaa['all-downloads']
  const wrapper = mount(CompleteDownloadsTag)

  expect(wrapper.attributes('title')).contain(titleString)
})

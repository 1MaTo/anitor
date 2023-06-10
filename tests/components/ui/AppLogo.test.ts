import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import LogoImage from '@/assets/bd_logo.png'
import AppLogo from '@/components/ui/AppLogo.vue'
import { APP_NAME } from '@/utils/app'

it('Has valid name', () => {
  expect(AppLogo).toBeTruthy()
  const wrapper = mount(AppLogo)

  expect(wrapper.html()).contain(APP_NAME)
  expect(wrapper.html()).contain(LogoImage)
})

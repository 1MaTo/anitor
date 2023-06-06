import { APP_NAME } from '@/utils/app'
import { config, mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import AppLogo from '../../ui/AppLogo.vue'
import LogoImage from '@/assets/bd_logo.png'
import vuetify from '@/plugins/vuetify'

config.global.plugins = [vuetify]

it('Has valid name', () => {
  expect(AppLogo).toBeTruthy()
  const wrapper = mount(AppLogo)

  expect(wrapper.html()).contain(APP_NAME)
  expect(wrapper.html()).contain(LogoImage)
})

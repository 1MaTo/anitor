import SelectLocaleButtonVue from '@/components/ui/SelectLocaleButton.vue'
import { AppLocale, LanguageName } from '@/types/locale'
import { config, mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import vuetify from '../../../plugins/vuetify'

config.global.plugins = [vuetify]

const openMenuButtonSelector = '[data-testid=open-menu]'
const activeListItemSelector = '.v-list-item--active'

it('After locale prop change, will change active button', async () => {
  expect(SelectLocaleButtonVue).toBeTruthy()

  const wrapper = mount(SelectLocaleButtonVue as any, {
    props: { locale: AppLocale.en } as any
  })

  await wrapper.find(openMenuButtonSelector).trigger('click')

  expect(document.body.querySelector(activeListItemSelector)?.innerHTML).contain(LanguageName.en)

  await wrapper.setProps({ locale: AppLocale.ru })

  expect(document.body.querySelector(activeListItemSelector)?.innerHTML).contain(LanguageName.ru)
})

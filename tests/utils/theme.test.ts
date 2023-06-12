import { expect, test } from 'vitest'
import { ThemeType } from '@/types/theme'
import { getPreferedTheme } from '@/utils/theme'

test('Get theme from media query', () => {
  expect(getPreferedTheme()).toBe(ThemeType.dark)
})

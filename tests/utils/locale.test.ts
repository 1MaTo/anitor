import { expect, test } from 'vitest'
import { AppLocale } from '../../types/locale'
import { getBrowserLocale } from '../../utils/locale'

test('Get valid locale from browser', () => {
  expect(Object.values(AppLocale).includes(getBrowserLocale())).toBeTruthy()
})

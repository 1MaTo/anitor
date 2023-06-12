import { CookieOptions } from 'nuxt/app'

export enum CookieKey {
  theme = 'theme',
  locale = 'locale'
}

export const getCookieExpiredDate = () => {
  return new Date(new Date().getFullYear(), 12, 0)
}

export const preferencesCookieOptions = {
  expires: getCookieExpiredDate(),
  sameSite: 'lax'
} as CookieOptions<string | null | undefined>

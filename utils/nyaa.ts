const NYAA_ENDPOINT = 'https://nyaa.si'

export const getNyaaTorrentLink = (id: string) => `${NYAA_ENDPOINT}/view/${id}`

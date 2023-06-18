const NYAA_ENDPOINT = 'https://nyaa.si'
const BLU_RAY_QUERY = 'bd|"blu-ray"|"blu ray"'

export const getNyaaTorrentLink = (id: string) => `${NYAA_ENDPOINT}/view/${id}`

const addBluRayQuery = (value: string) => `${value} ${BLU_RAY_QUERY}`

export const modifyQuery = { addBluRayQuery }

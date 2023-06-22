export const removeUndefinedFields = (object: any) => {
  const newObj = {} as any
  Object.keys(object).forEach((key) => {
    if (object[key] === Object(object[key])) newObj[key] = removeUndefinedFields(object[key])
    else if (object[key] !== undefined) newObj[key] = object[key]
  })
  return newObj
}

export const groupBy = <K, T>(list: T[], keyGetter: (item: T) => K): Map<K, T[]> => {
  const map = new Map<K, T[]>()
  list.forEach((item) => {
    const key = keyGetter(item)
    const collection = map.get(key)
    collection && collection.push(item)
    !collection && map.set(key, [item])
  })
  return map
}

export const randomArrayValue = <T>(array: Array<T>): T =>
  array[Math.floor(Math.random() * array.length)]

export const randomHexColour = (): string => '#' + Math.floor(Math.random() * 16777215).toString(16)

export const round = (
  value: number,
  options: { style?: 'decimal' | 'currency' | 'percent'; digits?: number } = {}
): string => {
  let { style, digits } = options

  style = style ?? 'decimal'
  digits = digits ?? 2
  const currency = 'BRL'

  return value.toLocaleString('pt-BR', {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
    currency,
    style,
  })
}

export const dateTime = (date: Date | number): string => new Date(date).toTimeString().slice(0, 8)

export const dateHourAndMinute = (date?: Date | number): string =>
  dateTime(date ?? Date.now()).substr(0, 5)

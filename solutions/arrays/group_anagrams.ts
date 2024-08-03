export default function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map()

  strs.forEach((str) => {
    const key = str.split('').sort().join('')
    if (!map.get(key)) {
      map.set(key, [str])
    } else {
      map.set(key, [...map.get(key)!, str])
    }
  })

  return [...map.values()]
}

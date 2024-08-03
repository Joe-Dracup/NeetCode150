export default function topKElements(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map()

  nums.forEach((num) => {
    if (map.get(num)) {
      map.set(num, map.get(num)! + 1)
    } else {
      map.set(num, 1)
    }
  })

  return [
    ...new Map([...map.entries()].sort((a, b) => b[1] - a[1])).keys(),
  ].slice(0, k)
}

export default function longestConsecutiveSequence(nums: number[]): number {
  if (!nums.length) {
    return 0
  }

  const set = new Set(nums)
  let longest = 1

  set.forEach((number) => {
    let length = 1
    while (set.has(number - length)) {
      length++
    }

    if (length > longest) {
      longest = length
    }
  })

  return longest
}

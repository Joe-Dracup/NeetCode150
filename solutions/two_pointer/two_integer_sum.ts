export default function twoIntegerSum(
  numbers: number[],
  target: number
): number[] {
  let i = 0,
    x = numbers.length - 1

  while (i < x) {
    const currentSum = numbers[i] + numbers[x]

    if (currentSum < target) {
      i++
    } else if (currentSum > target) {
      x--
    } else {
      return [i + 1, x + 1]
    }
  }

  return []
}

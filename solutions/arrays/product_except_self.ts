export default function productExceptSelf(nums: number[]): number[] {
  let returnArr: number[] = []

  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    returnArr[i] = prefix
    prefix *= nums[i]
  }

  let postfix = 1
  for (let i = nums.length - 1; i > -1; i--) {
    returnArr[i] *= postfix
    postfix *= nums[i]
  }
  return returnArr
}

import containsDuplicate from './solutions/arrays/contains_duplicate'
import { decode, encode } from './solutions/arrays/encode_decode'
import groupAnagrams from './solutions/arrays/group_anagrams'
import isValidSoduko, { Char } from './solutions/arrays/is_valid_soduko'
import longestConsecutiveSequence from './solutions/arrays/largest_consecutive_sequence'
import productExceptSelf from './solutions/arrays/product_except_self'
import topKElements from './solutions/arrays/top_k_elements'
import twoSum from './solutions/arrays/two_sum'
import validAnagram from './solutions/arrays/valid_anagram'
import isValidPalindrome from './solutions/two_pointer/is_palindrome'
import twoIntegerSum from './solutions/two_pointer/two_integer_sum'

const printArraySolution = false
const printTwoPointerSolution = true

if (printArraySolution) {
  console.log(containsDuplicate([1, 2, 3, 5]))

  console.log(validAnagram('racecar', 'carrace'))

  console.log(twoSum([5, 5], 10))

  console.log(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']))

  console.log(topKElements([1, 2, 2, 3, 3, 3], 2))

  console.log(decode(encode(['', 'test'])))

  console.log(productExceptSelf([1, 2, 4, 6]))

  const board: Char[][] = [
    ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
    ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '.', '3'],
    ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
    ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]

  console.log(isValidSoduko(board))

  console.log(longestConsecutiveSequence([2, 20, 4, 10, 3, 4, 5]))
}

if (printTwoPointerSolution) {
  console.log(isValidPalindrome('Was it a car or a cat I saw?'))

  console.log(twoIntegerSum([1, 2, 3, 4], 3))
}

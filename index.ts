import containsDuplicate from './solutions/arrays/contains_duplicate'
import { decode, encode } from './solutions/arrays/encode_decode'
import groupAnagrams from './solutions/arrays/group_anagrams'
import productExceptSelf from './solutions/arrays/product_except_self'
import topKElements from './solutions/arrays/top_k_elements'
import twoSum from './solutions/arrays/two_sum'
import validAnagram from './solutions/arrays/valid_anagram'

console.log(containsDuplicate([1, 2, 3, 5]))

console.log(validAnagram('racecar', 'carrace'))

console.log(twoSum([5, 5], 10))

console.log(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']))

console.log(topKElements([1, 2, 2, 3, 3, 3], 2))

console.log(decode(encode(['', 'test'])))

console.log(productExceptSelf([1, 2, 4, 6]))

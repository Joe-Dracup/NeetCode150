export default function isValidPalindrome(s: string): boolean {
  s = s.toLowerCase().replace(/[^0-9a-z]/gi, '')

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }

  return true
}

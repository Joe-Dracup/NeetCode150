export default function validAnagram(s: string, t: string): boolean {
  return s.split('').sort().join('') == t.split('').sort().join('')
}

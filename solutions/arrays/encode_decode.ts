export function encode(strs: string[]): string {
  return strs.map((str) => `${str.length}#${str}`).join('')
}

export function decode(str: string): string[] {
  let decodedWords: string[] = []
  let index = 0
  while (index < str.length) {
    const { nextIndex, word } = delimitWord(str, index)

    decodedWords.push(word)
    index = nextIndex
  }

  return decodedWords
}

const delimitWord = (
  str: string,
  index: number
): { nextIndex: number; word: string } => {
  const delimiter = str.indexOf('#', index)
  const length = Number(str.slice(index, delimiter))
  const [start, end] = [delimiter + 1, delimiter + length + 1]
  const word = str.slice(start, end)

  return {
    nextIndex: end,
    word,
  }
}

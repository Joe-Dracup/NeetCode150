export type Char = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.'

export default function isValidSoduko(board: Char[][]): boolean {
  let squares: Char[] = []
  for (let i = 0; i < board.length; i++) {
    let column: Char[] = []
    const row = board[i]

    for (let x = 0; x < board.length; x++) {
      column.push(board[x][i])

      if (i % 3 === 0) {
        squares.push(board[x][i])
        squares.push(board[x][i + 1])
        squares.push(board[x][i + 2])

        if (squares.length === 9) {
          if (!isValidRow(squares)) {
            return false
          }

          squares = []
        }
      }
    }

    if (!isValidRow(column) || !isValidRow(row)) {
      return false
    }

    squares = []
  }

  return true
}

const isValidRow = (row: Char[]) => {
  row = row.filter((el) => el !== '.')
  const set: Set<Char> = new Set(row)

  return set.size === row.length
}

export const BOARD_WIDTH = 4
export const BOARD_HEIGHT = 4

export const populate = (): any[][] => {
   // this is just a fancy way to auto populate a 0 board based on our desired h / w
   // @ts-ignore
   const populatedArr = []
   for (let i = 0; i < BOARD_HEIGHT; i += 1) {
      // push an array of W length filled with 0
      populatedArr.push(Array.from({ length: BOARD_WIDTH }, () => 0))
   }
   return populatedArr
}

// self explainatory but just lets us clone
// the board in memory so we dont get any "artifacts"
export const cloneBoard = (board: any[][]): any[][] => {
   // @ts-ignore
   const clonedArr: any = []
   board.forEach((row) => clonedArr.push(row))
   return clonedArr
}

const checkVertical = (board: any[][]): number | void => {
   // to stop out of bounds error we start 3 deep into the row so we can count backwards in
   // the if statement (bc we know a winner is a fixed height of 4)
   for (let row = 3; row < BOARD_HEIGHT; row += 1) {
      for (let col = 0; col < BOARD_WIDTH; col += 1) {
         // if the current tile exists (win condition)
         if (board[row][col]) {
            // if all of the previous rows contain the same player then return that player
            if (
               board[row][col] === board[row - 1][col] &&
               board[row][col] === board[row - 2][col] &&
               board[row][col] === board[row - 3][col]
            ) {
               return board[row][col]
            }
         }
      }
   }
}

const checkHorizontal = (board: any[][]): number | void => {
   // we want to check all rows
   for (let row = 0; row < BOARD_HEIGHT; row += 1) {
      // same logic as before where we prevent the out of bounds error
      for (let col = 0; col < BOARD_WIDTH - 3; col += 1) {
         // same as vertical
         if (board[row][col]) {
            // same as vertical
            if (
               board[row][col] === board[row][col + 1] &&
               board[row][col] === board[row][col + 2] &&
               board[row][col] === board[row][col + 3]
            ) {
               return board[row][col]
            }
         }
      }
   }
}

const checkDiagonalRight = (board: any[][]): number | void => {
   // this checks left to right diagonal
   // we start similar to above with 3 from the top bc we want to count - 3 incrementing
   for (let row = 3; row < BOARD_HEIGHT; row += 1) {
      // we are incrementing column so above we want to stop 3 from the edge
      for (let col = 0; col < BOARD_WIDTH - 3; col += 1) {
         if (board[row][col]) {
            // ex: row = 3 col = 0
            // board[2][1]
            // board[1][2]
            // board[0][3]
            if (
               board[row][col] === board[row - 1][col + 1] &&
               board[row][col] === board[row - 2][col + 2] &&
               board[row][col] === board[row - 3][col + 3]
            ) {
               return board[row][col]
            }
         }
      }
   }
}

const checkDiagonalLeft = (board: any[][]): number | void => {
   // this checks right to left diagonal
   // bc we are going right to left we are just x-- y-- incrementing down
   // so in this case we both start 3 from their respective maxes
   for (let row = 3; row < BOARD_HEIGHT; row += 1) {
      for (let col = 3; col < BOARD_WIDTH; col += 1) {
         if (board[row][col]) {
            // ex: row = 3 col = 3
            // board[2][2]
            // board[1][1]
            // board[0][0]
            if (
               board[row][col] === board[row - 1][col - 1] &&
               board[row][col] === board[row - 2][col - 2] &&
               board[row][col] === board[row - 3][col - 3]
            ) {
               return board[row][col]
            }
         }
      }
   }
}

const checkDraw = (board: any[][]): 0 | 'draw' => {
   // loop through whole board and there is no 0 (empty) cells then return draw
   // the draw only gets returned if all other are 0 (bc the truthy statements) which is why its
   // called last in the check
   for (let row = 0; row < BOARD_HEIGHT; row += 1) {
      for (let col = 0; col < BOARD_WIDTH; col += 1) {
         if (!board[row][col]) {
            return 0
         }
      }
   }
   return 'draw'
}

export const validateBoard = (board: any[][]) =>
   checkVertical(board) ||
   checkDiagonalRight(board) ||
   checkDiagonalLeft(board) ||
   checkHorizontal(board) ||
   checkDraw(board)

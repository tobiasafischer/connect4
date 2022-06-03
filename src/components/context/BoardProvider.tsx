// @ts-nocheck
import React, { useContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { BOARD_HEIGHT, validateBoard, cloneBoard, populate } from './utils'

type BoardContextProps = {
   play: (col: number) => void
   player: number
   ai: number
   currentTurn: number
   turns: number[]
   board: any[][]
   gameOver: boolean
   message: string
}

const BoardContext = React.createContext<BoardContextProps | undefined>(undefined)

const initialBoard = {
   player: 1,
   ai: 2,
   currentTurn: 1,
   board: populate(),
   gameOver: false,
   message: '',
}

const boardReducer = (state: any, { type, clonedBoard, nextTurn, message }) => {
   switch (type) {
      case 'newGame':
         return {
            ...initialBoard,
            clonedBoard,
         }
      case 'toggleTurn':
         return {
            ...state,
            currentTurn: nextTurn,
            clonedBoard,
         }
      case 'endGame':
         return {
            ...state,
            gameOver: true,
            message,
            clonedBoard,
         }
      case 'updateMessage':
         return {
            ...state,
            message,
         }
      default:
         throw Error('action is not valid')
   }
}

const BoardProvider: React.FC = ({ children }) => {
   const [{ player, ai, currentTurn, board, gameOver, message }, dispatchBoardState] = useReducer(
      boardReducer,
      initialBoard,
   )
   const [moves, setMoves] = useState<number[]>([])

   const play = (col: number) => {
      if (!gameOver) {
         const clonedBoard = cloneBoard(board)
         let colLen = 0

         // starting by the bottom, check if the top cell is taken
         // valid if first column has 3 tiles but not if it has 4
         for (let row = BOARD_HEIGHT - 1; row >= 0; row -= 1) {
            // @ts-ignore
            if (!clonedBoard[row][col]) {
               // populate tile and break the loop
               clonedBoard[row][col] = currentTurn
               break
            } else {
               colLen += 1
            }
         }

         // we are counting the # of taken tiles in the column
         // if it reaches the end then that means that column is filled
         // so we dont want to register that turn
         // we could add an error message trigger here
         if (colLen === BOARD_HEIGHT) return
         setMoves((prev) => [...prev, col])

         // Check status of clonedBoard
         const res: string = validateBoard(clonedBoard)
         switch (res) {
            // the player won
            case player:
               dispatchBoardState({
                  type: 'endGame',
                  message: 'Woohoo! You win!',
                  board: clonedBoard,
               })
               break
            // robot won
            case ai:
               dispatchBoardState({
                  type: 'endGame',
                  message: 'The ai triumphs! (be polite to siri)',
                  board: clonedBoard,
               })
               break
            // draw
            case 'draw':
               dispatchBoardState({
                  type: 'endGame',
                  message: 'Mutually assured destruction (tie)!',
                  board: clonedBoard,
               })
               break
            // game continues
            default:
               dispatchBoardState({
                  type: 'toggleTurn',
                  nextTurn: currentTurn === player ? ai : player,
                  board: clonedBoard,
               })
               break
         }
      } else {
         // game is over
         dispatchBoardState({
            type: 'updateMessage',
            message: 'Game Over. Play again?',
         })
      }
   }

   useEffect(async () => {
      if (currentTurn === ai && moves.length > 0) {
         const { data } = await axios.get(
            'https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production',
            {
               params: { moves: `[${moves}]` },
            },
         )
         play(data[data.length - 1])
      }
   }, [currentTurn])

   return (
      <BoardContext.Provider
         value={{ play, player, ai, currentTurn, moves, board, gameOver, message }}
      >
         {children}
      </BoardContext.Provider>
   )
}

export const useBoard = () => {
   const context = useContext(BoardContext)
   if (context === undefined) {
      throw new Error('useBoard must be used inside BoardProvider')
   }

   return context
}

export default BoardProvider

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
   choosePlayer: (playerNum: 1 | 2) => void
   reset: () => void
   toggleInvalidMove: () => void
   invalidMove: boolean
   hovered: number
   handleMouseEnter: (colIndex: number) => void
   handleMouseLeave: () => void
}

const BoardContext = React.createContext<BoardContextProps | undefined>(undefined)

const initialBoard = {
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
            board: clonedBoard,
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
   const [{ currentTurn, board, gameOver, message }, dispatchBoardState] = useReducer(
      boardReducer,
      initialBoard,
   )
   const [player, setPlayer] = useState(null)
   const [ai, setAi] = useState(null)
   const [moves, setMoves] = useState<number[]>([])
   const [invalidMove, setInvalidMove] = useState(false)
   const [hovered, setHovered] = useState(null)

   const handleMouseEnter = (colIndex: number) => setHovered(colIndex)
   const handleMouseLeave = () => setHovered(null)

   const toggleInvalidMove = () => setInvalidMove((prev) => !prev)

   const reset = () => {
      dispatchBoardState({
         type: 'newGame',
         clonedBoard: populate(),
      })
      setPlayer(null)
      setAi(null)
      setMoves([])
   }

   const choosePlayer = (playerNum: 1 | 2) => {
      setPlayer(playerNum)
      setAi(playerNum === 1 ? 2 : 1)
   }

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
         if (colLen === BOARD_HEIGHT) {
            toggleInvalidMove()
            setTimeout(() => toggleInvalidMove(), 1000)
            return
         }
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
      if (currentTurn === ai) {
         const { data } = await axios.get(
            'https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production',
            {
               params: { moves: `[${moves}]` },
            },
         )
         play(data[data.length - 1])
      }
   }, [currentTurn, ai])

   return (
      <BoardContext.Provider
         value={{
            reset,
            invalidMove,
            toggleInvalidMove,
            choosePlayer,
            play,
            player,
            ai,
            currentTurn,
            moves,
            board,
            gameOver,
            message,
            hovered,
            handleMouseEnter,
            handleMouseLeave,
         }}
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

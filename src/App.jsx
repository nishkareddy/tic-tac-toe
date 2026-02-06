import { useState, useEffect } from 'react'
import Board from './components/Board'
import GameStatus from './components/GameStatus'
import ResetButton from './components/ResetButton'
import './App.css'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [winner, setWinner] = useState(null)
  const [winningSquares, setWinningSquares] = useState(null)

  // Check for winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal top-left to bottom-right
      [2, 4, 6], // diagonal top-right to bottom-left
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          winningSquares: [a, b, c]
        }
      }
    }
    return null
  }

  // Check for draw
  const checkDraw = (squares) => {
    return squares.every(square => square !== null) && !winner
  }

  // Handle square click
  const handleSquareClick = (index) => {
    // Don't allow moves if game is over or square is already filled
    if (squares[index] || winner) {
      return
    }

    const newSquares = [...squares]
    newSquares[index] = currentPlayer

    setSquares(newSquares)

    // Check for winner
    const result = calculateWinner(newSquares)
    if (result) {
      setWinner(result.winner)
      setWinningSquares(result.winningSquares)
    } else {
      // Switch player
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  // Reset game
  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setCurrentPlayer('X')
    setWinner(null)
    setWinningSquares(null)
  }

  const isDraw = checkDraw(squares)
  const gameOver = winner !== null || isDraw

  return (
    <div className="app">
      <div className="game-container">
        <h1 className="title">Tic Tac Toe</h1>
        <GameStatus
          currentPlayer={currentPlayer}
          winner={winner}
          isDraw={isDraw}
          gameOver={gameOver}
        />
        <Board
          squares={squares}
          onClick={handleSquareClick}
          winningSquares={winningSquares}
        />
        <ResetButton onReset={resetGame} gameOver={gameOver} />
      </div>
    </div>
  )
}

export default App

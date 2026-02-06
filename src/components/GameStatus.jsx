import './GameStatus.css'

function GameStatus({ currentPlayer, winner, isDraw, gameOver }) {
  const getStatusMessage = () => {
    if (winner) {
      return `🎉 Player ${winner} Wins!`
    }
    if (isDraw) {
      return "🤝 It's a Draw!"
    }
    return `Player ${currentPlayer}'s Turn`
  }

  return (
    <div className={`game-status ${gameOver ? 'game-over' : ''}`}>
      <h2>{getStatusMessage()}</h2>
    </div>
  )
}

export default GameStatus

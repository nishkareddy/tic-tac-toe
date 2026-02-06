import './ResetButton.css'

function ResetButton({ onReset, gameOver }) {
  return (
    <button 
      className={`reset-button ${gameOver ? 'visible' : ''}`}
      onClick={onReset}
    >
      {gameOver ? 'Play Again' : 'Reset Game'}
    </button>
  )
}

export default ResetButton

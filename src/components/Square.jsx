import './Square.css'

function Square({ value, onClick, isWinning }) {
  return (
    <button
      className={`square ${isWinning ? 'winning' : ''}`}
      onClick={onClick}
      disabled={value !== null}
    >
      {value}
    </button>
  )
}

export default Square

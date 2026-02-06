import Square from './Square'
import './Board.css'

function Board({ squares, onClick, winningSquares }) {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          isWinning={winningSquares && winningSquares.includes(index)}
        />
      ))}
    </div>
  )
}

export default Board

import { Link } from 'react-router-dom'
import { IoHomeSharp } from 'react-icons/io5'
import { useState } from 'react'
import '../sass/tictactoe_style.scss'

export const TicTacToe = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))

    const winnerInfo = calculateWinner(squares)
    const winner = winnerInfo.winner
    const winnerLine = winnerInfo.line

    function handleClick(i) {
        if (squares[i] || winner) {
            return
        }
        const nextSquares = squares.slice()
        if (xIsNext) {
            nextSquares[i] = "X"
        } else {
            nextSquares[i] = "O"
        }
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }

    const draw = checkDraw(squares)
    let status

    if (winner) {
        status = "Winner: " + winner
    } else if (draw) {
        status = "It's a Draw"
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O")
    }

    function handleRestart() {
        setSquares(Array(9).fill(null))
        setXIsNext(true);
    }

    return (
        <div className="content">
            <Link to="/">
                <div className="home-icon"><IoHomeSharp /></div>
            </Link>

            <div className="table">
                <div className="status">{status}</div>
                <div className="board">
                    {squares.map((square, index) => {
                        return (
                            <div key={index}>
                                <Square
                                    value={squares[index]}
                                    onSquareClick={() => handleClick(index)}
                                    highlight={winnerLine.includes(index)}
                                />
                            </div>
                        )
                    })}
                </div>
                <button className="restart" onClick={handleRestart}>
                    Restart
                </button>
            </div>
        </div>
    )
}

function Square({ value, onSquareClick, highlight }) {
    return (
        <button
            className="square"
            onClick={onSquareClick}
            style={{ backgroundColor: highlight ? 'rgba(247,134,96,0.5)' : 'transparent' }}
        >
            {value}
        </button>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i <lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], line: lines[i] }
        }
    }
    return { winner: null, line: [] }
}

function checkDraw(squares) {
    return squares.every(square => square !== null) && !calculateWinner(squares).winner
}
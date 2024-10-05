import { Link } from 'react-router-dom'
import { IoHomeSharp } from 'react-icons/io5'
import { useState } from 'react'
import '../sass/tictactoe_style.scss'

export const TicTacToe = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
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
    const winner = calculateWinner(squares)
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
                                    value={square}
                                    onSquareClick={() => handleClick(index)}
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

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
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
            return squares[a]
        }
    }
    return null
}

function checkDraw(squares) {
    return squares.every(square => square !== null) && !calculateWinner(squares)
}
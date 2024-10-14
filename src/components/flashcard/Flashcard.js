import { useState } from 'react'

const Flashcard = ({ flashcard }) => {
	const [flip, setFlip] = useState(false)

	return (
		<div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
			<div className="card-front">
				{flashcard.question}
				<div className="flashcard-options">
					{flashcard.options.map((option, index) => {
						return <div key={index} className="option">{option}</div>
					})}
				</div>
			</div>
			<div className="card-back">{flashcard.answer}</div>
		</div>
	)
}

export default Flashcard
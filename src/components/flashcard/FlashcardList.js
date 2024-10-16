import Flashcard from './Flashcard'

const FlashcardList = ({ flashcards }) => {
	return (
		<div className="card-grid">
			{flashcards.map(flashcard => {
				return (
					<div key={flashcard.id}>
						<Flashcard flashcard={flashcard} />
					</div>
				)
			})}
		</div>
	)
}

export default FlashcardList
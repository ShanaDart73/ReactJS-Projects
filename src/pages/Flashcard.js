import { Link } from 'react-router-dom'
import { IoHomeSharp } from 'react-icons/io5'
import FlashcardList from '../components/flashcard/FlashcardList'
import { SAMPLE_CARDS } from '../lib/flashcard/data'
import '../style/flashcard_style.css'

export const Flashcard = () => {
    return (
        <div className="flashcard-content">
            <Link to="/">
                <div className="home-logo"><IoHomeSharp /></div>
            </Link>
            <h1 className="flashcard-header">Asia Capitals</h1>
            <FlashcardList flashcards={SAMPLE_CARDS} />
        </div>
    )
}

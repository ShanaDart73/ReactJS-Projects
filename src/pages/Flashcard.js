import { Link } from 'react-router-dom'
import '../sass/flashcard_style.scss'
import { IoHomeSharp } from 'react-icons/io5'
import FlashcardList from '../components/flashcard/FlashcardList'
import { SAMPLE_CARDS } from '../lib/flashcard/data'

export const Flashcard = () => {
    return (
        <div className="content">
            <Link to="/">
                <div className="home-logo"><IoHomeSharp /></div>
            </Link>
            <h1 className="title">Asia Capitals</h1>
            <FlashcardList flashcards={SAMPLE_CARDS} />
        </div>
    )
}

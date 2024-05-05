import { Link } from 'react-router-dom'
import Header from '../components/shoppingList/Header'
import Footer from '../components/shoppingList/Footer'
import Content from '../components/shoppingList/Content'

export const ShoppingList = () => {
    return (
        <>
            <Link to="/">Homepage</Link>
            <Header />
            <Content />
            <Footer />
        </>
    )
}

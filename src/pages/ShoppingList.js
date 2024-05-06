import '../sass/shoppingList_style.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoHomeSharp } from 'react-icons/io5'
import Header from '../components/shoppingList/Header'
import Footer from '../components/shoppingList/Footer'
import Content from '../components/shoppingList/Content'

export const ShoppingList = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "Mozzarella"
        },
        {
            id: 2,
            checked: false,
            item: "Pizza"
        },
        {
            id: 3,
            checked: false,
            item: "Olives"
        }
    ])

    const handleChecked = (id) => {
        const listItems = items.map((item) => item.id === id ? {
            ...item, checked: !item.checked
        } : item)
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }

    return (
        <>
            <Link to="/" className="icon">
                <div ><IoHomeSharp /></div>
            </Link>
            <Header title="Shopping List" />
            <Content
                items={items}
                handleChecked={handleChecked}
                handleDelete={handleDelete}
            />
            <Footer />
        </>
    )
}

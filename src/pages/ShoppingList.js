import '../sass/shoppingList_style.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoHomeSharp } from 'react-icons/io5'
import Header from '../components/shoppingList/Header'
import AddItem from '../components/shoppingList/AddItem'
import SearchItem from '../components/shoppingList/SearchItem'
import Content from '../components/shoppingList/Content'
import Footer from '../components/shoppingList/Footer'

export const ShoppingList = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')))

    const [addItem, setAddItem] = useState('')

    const [search, setSearch] = useState('')

    const setAndSaveItems = (newItems) => {
        setItems(newItems)
        localStorage.setItem('shoppinglist', JSON.stringify(newItems))
    }

    const addNewItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1
        const newItem = { id, checked: false, item }
        const listItems = [...items, newItem]
        setAndSaveItems(listItems)
    }

    const handleChecked = (id) => {
        const listItems = items.map((item) => item.id === id ? {
            ...item, checked: !item.checked
        } : item)
        setAndSaveItems(listItems)
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setAndSaveItems(listItems)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!addItem) return
        addNewItem(addItem)
        setAddItem('')
    }

    return (
        <div className="wrapper">
            <div className="appContainer">
                <Link to="/" className="icon">
                    <div><IoHomeSharp /></div>
                </Link>
                <Header title="Shopping List" />
                <AddItem
                    addItem={addItem}
                    setAddItem={setAddItem}
                    handleSubmit={handleSubmit}
                />
                <SearchItem
                    search={search}
                    setSearch={setSearch}
                />
                <Content
                    items={items.filter((item) => ((item.item).toLowerCase())
                        .includes(search.toLowerCase()))}
                    handleChecked={handleChecked}
                    handleDelete={handleDelete}
                />
                <Footer length={items.length} />
            </div>
        </div>
    )
}

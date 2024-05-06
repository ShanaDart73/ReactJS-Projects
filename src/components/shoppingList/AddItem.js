import { FaCartPlus } from 'react-icons/fa6'
import { useRef } from 'react'

const AddItem = ({ addItem, setAddItem, handleSubmit }) => {
    const inputRef = useRef()

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItm"></label>
            <input
                autoFocus
                ref={inputRef}
                id="addItem"
                type="text"
                placeholder="Add Item"
                required
                value={addItem}
                onChange={(e) => setAddItem(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Add Item"
                onClick={() => inputRef.current.focus()}
            >
                <FaCartPlus />
            </button>
        </form>
    )
}

export default AddItem
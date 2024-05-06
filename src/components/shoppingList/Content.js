import '../../sass/shoppingList_style.css'
import { ImBin2 } from "react-icons/im"

const Content = ({ items, handleChecked, handleDelete }) => {

    return (
        <div className="main">
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleChecked(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: "line-through" } : null}
                            >
                                {item.id} - {item.item}
                            </label>
                            <ImBin2
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                    <p style={{ marginTop: "3em" }}>Your list is empty</p>
            )}
        </div>
    )
}

export default Content
import '../../sass/shoppingList_style.css'

const Header = ({ title }) => {
    return (
        <div className="header">
            <p>{title}</p>
        </div>
    )
}

Header.defaultProps = {
    title: "List"
}
export default Header
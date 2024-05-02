import {Link} from "react-router-dom";

export const Homepage = () => {
    return(
        <>
            <section className="one">
                <div className="text">
                    <Link to="/Shoppinglist"><h2>Shopping List</h2></Link>
                </div>
            </section>
            <section className="two">
                <div className="text">
                    <Link to="/Factorial"><h2>Factorial</h2></Link>
                </div>
            </section>
            <section className="three">
                <div className="text">
                    <Link to="/PrimeNumber"><h2>Prime Number</h2></Link>
                </div>
            </section>
            <section className="four">
                <div className="text">
                    <Link to="/RandomNumber"><h2>Random Number</h2></Link>
                </div>
            </section>
        </>
    )
}

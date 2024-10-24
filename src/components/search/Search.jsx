import "../search/Search.scss"
import bg from "../../assets/card1.svg"

const Search = () => {
    return (
        <>
        <div className="container">
            <div className="srch">
                <div>
                    <h1>Subscribe To Newsletter</h1>
                    <p>Get free guide about smart watches daily. </p>
                    <input type="text" name="" id="" placeholder="Lorem ipsun dolor "/>
                </div>
                <div>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
        <footer>
            <p>Lorem ipsum dolor sit amet.</p>
        </footer>
        </>
    )
}

export default Search
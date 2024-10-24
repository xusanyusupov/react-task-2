import "../hero/Hero.scss"
import bg from "../../assets/heroLogo.png"

// icons start 
import { IoSearch } from "react-icons/io5";
// icons end

const Hero = () => {
    return  (
        <section>
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__text">
                        <b>Discover Most Suitable  Watches</b>
                        <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                        <div className="hero__search">
                            <button className="sIcon"><IoSearch /></button>
                            <input type="text" placeholder="Find the best brands"/>
                            <button className="searchText">Search</button>
                        </div>
                    </div>
                    <div className="hero__img">
                        <img src={bg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
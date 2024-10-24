import "../card/Card.scss"
import card1 from "../../assets/card1.svg"
import card2 from "../../assets/card2.svg"
import card3 from "../../assets/card3.svg"
import card4 from "../../assets/card4.svg"
import card5 from "../../assets/card5.svg"
import card6 from "../../assets/card6.svg"

// icons start 
import { FaStar } from "react-icons/fa";
// icons end 


let INFO__CARD = [
    {
        img: card1,
        id: 1,
        title: 'Apple Smart',
        price: 255.00,
        del: 300.00,
    },
    {
        img: card2,
        id: 2,
        title: 'Apple Smart II',
        price: 255.00,
        del: 300.00,
    },
    {
        img: card3,
        id: 3,
        title: 'Apple Smart III',
        price: 355.00,
        del: 555.00,
    },
    {
        img: card4,
        id: 4,
        title: 'Apple Smart IV',
        price: 399.00,
        del: 450.00,
    },
    {
        img: card5,
        id: 5,
        title: 'Samsung Watch Pro',
        price: 300.00,
        del: 400.00,
    },
    {
        img: card6,
        id: 6,
        title: 'Fitbit Max 01',
        price: 155.00,
        del: 200.00,
    },
]


const Card = () =>{
    let cardREN = INFO__CARD.map((item) => (
        <div key={item.id} className="card">
            <div className="card__img">
                <img src={item.img} alt="" />
            </div>
         <div className="card__text">
            <b className="card__title">{item.title}</b>
            <b className="card__star"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></b>
            <strong><del>${item.del}</del> ${item.price}</strong>
         </div>
    </div>
    ))
    return (
        <div className="container">
            <div className="text-center">
                <p>Find your favourite smart watch.</p>
                <b>Our Latest Products</b>
            </div>
            <div className="card__wrapper">
                {cardREN}
            </div>
            <button>See More</button>
        </div>
    )
}

export default Card
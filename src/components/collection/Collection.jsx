import "../collection/Collection.scss"

import col1 from "../../assets/collection1.svg"
import col2 from "../../assets/collection2.svg"
import col3 from "../../assets/collection3.svg"

const COLLECTION = [
    {
        id: 1,
        img: col1,
        topTitile: 'Apple',
        text: 'Apple is one of the most famous smart watches providing company.'
    },
    {
        id: 2,
        img: col2,
        topTitile: 'Xiaomi',
        text: 'Xiaomi smart watches are produced by MI company.'
    },
    {
        id: 3,
        img: col3,
        topTitile: 'FitBit',
        text: 'FitBit smart watches are best for there health and fitness features.'
    },
]

const Collection = () => {

    let renderCol = COLLECTION.map((item) => (
        <div key={item.id} className="collection__card">
            <div>
                <img src={item.img} alt="" />
            </div>
            <div className="col__card-text">
                <b>{item.topTitile}</b>
                <p>{item.text}</p>
            </div>
        </div>  
    ))

    return  (
            <div className="container">
                <section className="collection">
                  {renderCol}
                </section>
            </div>
    )
}
export default Collection
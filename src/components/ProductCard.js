import "./ProductCard.scss"
import { useState } from 'react'
import coin from "../assets/icons/coin.svg"
import iconCartBlue from "../assets/icons/buy-blue.svg"
import iconCartWhite from "../assets/icons/buy-white.svg" 



function ProductCard(props) {
    let {name, category, cost, img} = props.product
    const [iconSrc, setIconSrc] = useState(iconCartBlue)

    return (
        <div className="card" onMouseEnter={() => {setIconSrc(iconCartWhite)}} onMouseLeave={() => {setIconSrc(iconCartBlue)}}>
            <img className="icon" src={iconSrc} alt="icon-blue-cart"/>
            <div className="hover">
                <div>
                <h2>{cost}</h2>
                <img src={coin} alt="coin-logo" />
                </div>
                <button onClick={() => props.assignPoints(cost)} >Redeem now</button>
            </div>
            <img src={img.url} alt={name} />
            <div className="img--separator"></div>
            <div className="text--card">
            <p className="category--tittle">{category}</p>
            <p className="name--tittle">{name}</p>
            </div>
        </div>
    );
}
export default ProductCard
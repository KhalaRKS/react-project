import { useState, useEffect } from "react";
import Filter from '../components/Filter'
import ProductCard from "../components/ProductCard";
import "./Main.scss"

function Main(props){

    const [products,setProducts] = useState(props.products)
    
    useEffect(() => {
        setProducts(props.products)
    },[props.products])

   
    const sortingFor = {
        mostRecent: () => {
            const newProducts = Array.from(products.sort((prev,curr) => prev.date - curr.date));
            setProducts(newProducts)
        },
        lowestPrice: () => {
            const newProducts = Array.from(products.sort((prev,curr) => prev.cost - curr.cost));
            setProducts(newProducts)
        },
        highestPrice: () => {
            const newProducts = Array.from(products.sort((prev,curr) => curr.cost - prev.cost));
            setProducts(newProducts)
        }
    }

    function getProductCards(prod){
        return prod.map((p) => <ProductCard key={p._id} product={p}/>)
    }
 
    return (
        <div className='main--container'>
            <Filter sortingFor={sortingFor}/>
            <div className='card--container'>
                {getProductCards(products)}
            </div>
        </div>
    )
}

export default Main
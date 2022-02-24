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
    
    function getCards(pagina,prod){
        
        if (prod.length === 0) {
            return
        }
        let productCards = []

        for(let index = pagina.page; index <= pagina.length; index++){
            productCards.push(<ProductCard assignPoints={props.setPoints} key={products[index]._id} product={products[index]}/>)
        }
        
       return productCards;
    }

   
    return (
        <div className='main--container'>
            <Filter pagination={props.pagination} sortingFor={sortingFor} changePage={props.changePage} buttonSort={true}/>
            <div className='card--container'>
                {getCards(props.pagination,products)}
            </div>
            <Filter pagination={props.pagination} changePage={props.changePage} buttonSort={false}/>
        </div>
    )
}

export default Main
import { useState, useEffect } from "react";
import Filter from '../components/Filter'
import ProductCard from "../components/ProductCard";
import "./Main.scss"

function Main(props){

    const [products,setProducts] = useState(props.products)
    const [page, setPage] = useState({page: 0,length: 15});

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

    function changePage(){

        let newPage = {...page}

        if(!page.page){
            newPage.page = (products.length / 2)
            newPage.length = products.length - 1
            setPage(newPage)
            return
        }
        newPage.page = 0
        newPage.length = (products.length / 2) - 1 
        setPage(newPage)
    }
    return (
        <div className='main--container'>
            <Filter pagination={page} sortingFor={sortingFor} changePage={changePage}/>
            <div className='card--container'>
                {getCards(page,products)}
            </div>
        </div>
    )
}

export default Main
import { useState } from 'react'
import ButtonPagination from "./ButtonPagination"
import ButtonSort from "./ButtonSort"
import Pagination from "./Pagination"
import "./Filter.scss"


function Filter(props) {
    const [activeButton, setActive] = useState(1)
    function setActiveButton(index){
        setActive(index)
    }

    function getButtons(){
            if(props.buttonSort){
                return(
                    <>
                        <div className='separator--filter'></div>
                        <p className='title--sort'>Sort by:</p>
                        <div className="button--sort--container">
                            <ButtonSort onClick={() => {setActiveButton(1)}} className={activeButton !== 1 ? 'button--sort' : 'button--sort active'}sorting={props.sortingFor.mostRecent} title="Most recent"/>
                            <ButtonSort onClick={() => {setActiveButton(2)}} className={activeButton !== 2 ? 'button--sort' : 'button--sort active'} sorting={props.sortingFor.lowestPrice} title="Lowest price"/>
                            <ButtonSort onClick={() => {setActiveButton(3)}} className={activeButton !== 3 ? 'button--sort' : 'button--sort active'} sorting={props.sortingFor.highestPrice} title="Highest price"/>
                        </div>
                    </>
                )
            }
            return null 
    }

    return (
            <div className="container--filter">
                <div className='container--titles--filter'>
                    <Pagination pagination={props.pagination}/>
                    {getButtons()}
                </div>
                <ButtonPagination pagination={props.pagination} changePage={props.changePage} className='container--button'/>
            </div>


    )
}

export default Filter
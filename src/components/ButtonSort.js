import { useState } from "react";
import "./ButtonSort.scss"


function ButtonSort(props) {
    let {title} = props

    function handleClick(){
        props.onClick();
        props.sorting()
    }

    return (
            <p className={props.className} onClick={handleClick}>{title}</p>
    );
}
export default ButtonSort
import Navbar from "../components/Navbar"
import banner from "../assets/header-x1.png"
import "./Header.scss"


function Header(props){

    return(
        <>
            <Navbar user={props.user}/>
            <div className="banner--header" >
                <h1 className="tittle--banner">Electronics</h1>
                <img src={banner} alt="banner-foto"/>
            </div>
        </>
    )
}

export default Header
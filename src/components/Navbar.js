import logo from "../assets/aerolab-logo.svg";
import coin from "../assets/icons/coin.svg";
import "./Navbar.scss"


function Navbar(props) {

    return (
        <>
            <nav className="navbar--container">
                <img src={logo} alt="aerolab-logo" />
                <div className="user--info">
                    <p className="user--name">{props.user.name}</p>
                    <div className="user--points">
                        <p >{props.user.points}</p>
                        <img src={coin} alt="coin-logo"/>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar
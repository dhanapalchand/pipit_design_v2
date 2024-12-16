import { useSelector } from "react-redux";
import ThemeButton from "./ThemeButton";
import { Link } from "react-router-dom";
import '../css/header.css';
import EcommerceImg from '../images/e.commerce.png'
import { IoCartOutline } from "react-icons/io5";

import { BsShop } from "react-icons/bs";
function Header() {
    const cartitems = useSelector((state) => state.cart.items)
    return (     
   <>
      <header style={{position:"sticky",top:"0",zIndex:"1000"}} >
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor:"#2874f0"}}  >
          {/* <img src={EcommerceImg} style={{ width: "5%", height: "50%" }} className="rounded mx-0 d-block mr-5" alt="Ecommerce Logo" /> */}
          <BsShop style={{color:"white",fontSize:"200%"}}/>&nbsp;&nbsp;&nbsp;
          <h3 className="mt-2" style={{color:"white"}}>PIPIT DESIGN</h3>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-collapse-desktop" id="navbarNav">
            <ul className="navbar-nav ml-5">
              <li className="nav-item active" >
                <Link to="/Product" className="nav-link" style={{color:"white",fontSize:"120%"}}>Product</Link>
              </li>
{/*               <li className="nav-item active">
                <Link className="nav-link" to="/About" style={{color:"white",fontSize:"120%"}}>About</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" style={{color:"white",fontSize:"120%"}}>Contact</Link>
              </li> */}
              <li className="nav-item active">
  <Link className="nav-link" to="/Cart">
    {cartitems.length > 0 && (
      <div className="notification">{cartitems.length}</div>
    )}
    <IoCartOutline
      className={`cart-icon ${cartitems.length > 0 ? 'has-items' : ''}`}
      style={{ color: "white", fontSize: "200%",padding:"3" }}
    />
  </Link>
</li>
              <li className="nav-item active">
                <Link className="nav-link" ><button className="btn" style={{background:"white",color:"#2874f0",fontWeight:"700"}}>Offline</button></Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
    )
}
export default Header;

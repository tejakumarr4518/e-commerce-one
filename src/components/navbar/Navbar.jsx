import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="navbar">
            <div className="heading">
            <h2>MyCart</h2>
            </div>
           <div className="mininav">
              <Link to="/Home">
              <i className="bi bi-house-door"></i>Home</Link>
              <Link to="/Electronics">Electronics</Link>
              <Link to="/Jewellary">Jewellary</Link>
              <Link to="/Men's">Mens Fashion</Link>
              <Link to="/Women's">Womens Fashion</Link>
            </div>
            <div className="subnav">
                <Link to="/Profile">
                <i className="bi bi-person-fill"></i>Profile</Link>
                <Link to="/Cart"> <i className="bi bi-bag-fill"></i>Cart</Link>
                <Link to="">Wishlist</Link>
                <button><i className="bi bi-box-arrow-in-right"></i>LOGIN</button>
            </div>
        </div>
    )
}
export default Navbar;
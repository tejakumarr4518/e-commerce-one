import { Link } from "react-router-dom";
import axios from "axios";
function  Womensfashions({womens}){
    let{image,title,price,rating,id}=womens;
    const  AddToCart=()=>{
        axios.post("http://localhost:3000/addToCart",womens).then(()=>{
            // alert("Added In The Cart")
        }).catch(()=>{
            // alert("Failed")
        })
    }
    return( 
    <div className="card w-25 my-3 ">
        <div >
            <img src={image} width="100%" height={"200"}/> 
            </div>
        <div>
        <h5>{title}</h5>
        <p>Price:${price}</p>
        <p>Rating:{rating.rate}</p>
<Link to={`/Womenswear/${id}`}><button className="btn btn-primary btn-sm mx-1 ">ProductDetails</button></Link>
        <button className="btn btn-warning btn-sm mx-1" onClick={AddToCart}>Add To Cart</button>
        </div>

    </div>

    )
}
export default Womensfashions;
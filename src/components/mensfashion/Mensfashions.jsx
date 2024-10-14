import { Link } from "react-router-dom";
import axios from "axios"
function Mensfashions({mens}){
 let{image,title,price,rating,id}=mens;

 const AddToCart=()=>{
            axios.post("http://localhost:3000/addToCart",mens).then(()=>{
                        // alert("successfuly added in the Cart")
            }).catch(()=>{
                    // alert("failed to add in the Cart ");
            })
 }
    return(<div className="card w-25 my-3">
        <div className="card-header">
            <img src={image} width="100%" height={"200"}/>
        </div>
        <div className="card-body">
            <h5>{title}</h5>
            <p>Price:{price}</p>
            <p>Rating:{rating.rate}</p>
            <Link to={`/Mensdetails/${id}`}><button className="btn btn-primary btn-sm mx-2">Product Details</button></Link>
            <button className="btn btn-warning btn-sm mx-2" onClick={AddToCart}>Add To Cart</button>
        </div>
   </div>

    )
}
export default Mensfashions;
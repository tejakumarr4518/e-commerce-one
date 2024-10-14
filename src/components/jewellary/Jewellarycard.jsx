import { Link } from "react-router-dom";
import axios from "axios"
function Jewellarycard({jewellaryproducts}){
    const {image,title,price,rating,id}=jewellaryproducts;
    const AddToCart=()=>{
        axios.post("http://localhost:3000/addToCart",jewellaryproducts).then(()=>{
            // alert("successfully added in the Cart")
        }).catch(()=>{
            // alert("failed to add in the Cart")
        })
    }
    return(
        <div className="card w-25 my-3">
        <div className="card-header">
            <img src={image} width="100%" height={200}/>
        </div>
        <div className="card-body ">
            <h5>{title}</h5>
            <p>Price:${price}</p>
            <p>Rating:{rating.rate}</p>
<Link to={`/Jewellarydetails/${id}`}>
<button className="btn btn-primary btn-sm mx-2">ProductDetails</button>
</Link>
            <button className="btn btn-warning btn-sm mx-2" onClick={AddToCart}>Add To Cart</button>
        </div>
</div> 
    )
}
export default Jewellarycard;
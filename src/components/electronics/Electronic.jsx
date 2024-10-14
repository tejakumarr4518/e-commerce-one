import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Electronic ({product}){
    let{image,title,rating,price,id}=product;
    const AddtoCart=()=>{
        axios.post("http://localhost:3000/addToCart",product).then(()=>{
            // alert("Successfully Added In The Cart")
        }).catch(()=>{
                // alert("Failed To Add in The Cart");
        })
    }
    return(
        <div className="card w-25  my-3">
              <div className="card-header">
                <img src={image}width="100%" height={300}/>
                </div>
              <div className="card-body">
                <h4>{title}</h4>
                <p>Price:${price}</p>
                <p>Rating:{rating.rate}</p>
                <Link to={`/Electronicdetails/${id}`}>
                <button className="btn btn-primary mx-1 btn-sm">Product Details</button>
                </Link>
                <button className="btn btn-warning mx-1 btn-sm" onClick={AddtoCart}>Add To Cart</button>
                </div>
              {/* <div className="card-footer">
                <button className="btn btn-primary mx-1">Product Details</button>
                <button className="btn btn-warning mx-1">Add To Cart</button>
              </div> */}
    </div>
    )
}
export default Electronic;
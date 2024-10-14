import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect,useState} from "react";

 function Womensfashiondetails(){
    let[state,setState]=useState({
        name:"",
        price:0,
        rating:{
            rate:0,
            count:0,
        },
        description:"",
        image:"",
        category:""
    })
useEffect(()=>{
    axios.get(`http://localhost:3000/products/${object.id}`).then((res)=>{
console.log(res.data);
setState(res.data)

    }).catch((Error)=>{
console.log(Error);
    })
})
    let object=useParams();
return(
    <div className="container mt-5 p-3 shadow">
        <div className="row">
            <div className="col-4">
               <img src={state.image} width={"100%"} height={"400px"}/> 
            </div>
            <div className="col-8">
                <dt>Product Name:</dt>
                <dd>{state.title}</dd>

                <dt>Price:</dt>
                <dd>${state.price}</dd>

                <dt>Rating:</dt>
                <dd>{state.rating.rate}</dd>

                <dt>Category:</dt>
                <dd>{state.category}</dd>

                <dt>Description:</dt>
                <dd>{state.description}</dd>

                <button className="btn btn-primary mt-3 mx-3">Add To Cart</button>
                <button className="btn btn-danger mt-3 mx-3">Back  To Womens </button>
            </div>
        </div>
          </div>
)
}
 export default Womensfashiondetails;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Mensfashiondetails(){
   let[state, setState]= useState({
            id:0,
            title:"",
            rating:{
                rate:0,
                count:0,
            },
            description:"",
            category:"",
            image:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${object.id}`).then((res)=>{
console.log(res.data);
setState(res.data);

        }).catch((Error)=>{
alert("Error");
        })
    },[])
    let object=useParams();
    return(
<div className="container mt-5 p-3 shadow ">
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

    <dt>Description</dt>
    <dd>{state.description}</dd>

    <button className="btn btn-primary mx-3 mt-3">Add To Cart</button>
    <button className="btn btn-danger mx-3 mt-3">Back to Men's </button>
</div>
</div>
</div>
    )
}
export default Mensfashiondetails;
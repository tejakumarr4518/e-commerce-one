import{useState,useEffect} from "react"
import axios from "axios";
function Cart(){
 let [state,setState]=useState([]);
 useEffect(()=>{
    getCartsData();
 },[]);
  
 const getCartsData=()=>{
    axios.get("http://localhost:3000/addToCart").then((res)=>{
        setState(res.data)
    }).catch(()=>{
        alert("Failed to Add in the Cart");
    })
 }

 const RemovefromCart=(id)=>{
    axios.delete(`http://localhost:3000/addToCart/${id}`).then(()=>{
            // alert("Removed From Cart");
            getCartsData();
    }).catch(()=>{
                // alert("Failed To Remove from Cart")
    })
 }
    return(
        <div className="container mt-5">
            <div className="row">
                    <h2 className="text-success">Your Cart</h2>
            </div>
            {
                state.length>0?state.map((product)=>{
                    return(
                        <div className="row mt-3 shadow border border-success rounded p-3 d-flex justify-content-evenly align-items-center">
                            <div className="col-2">
                                <img className="shadow" src={product.image} width="150" height="150"/>
                                </div>
                                <div className="col-2">
                                     {product.title}
                                </div>
                                <div className="col-2">
                                    ${product.price}
                                </div>
                                <div className="col-2">
                                        {product.category}
                                    </div>
                                    <div className="col-2"> 
                                          <button className="btn btn-lg btn-danger" onClick={()=>{
                                            RemovefromCart(product.id)
                                          }}>
                                            Remove
                                          </button>
                                        </div>

                        </div>
                    )

                })
              
             :
                (<h3 className="text-danger text-center mt-5">No Products In The Cart</h3>)
            }      
        </div>
    )
}
export default Cart;
import React from "react";
import "./Jewellary.css";
import { jewellaryService } from "../services/jewellary/JewellaryService";
import { useState,useEffect } from "react";
import Jewellarycard from "./jewellarycard";

function Jewellary(){
useEffect(()=>{
    getjewellary();
})

   let[jewellary,setjewellary] =useState([])
    const getjewellary=()=>{
          jewellaryService().then((res)=>{
                console.log(res.data);
                setjewellary(res.data)
          }).catch((Error)=>{
                    console.log(Error);
          })
                
    }
    return(
            <div className="jewellarycontainer">
                <h2>Jewellary </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate officiis, aperiam ut ipsum adipisci commodi quia provident ducimus, corporis beatae accusamus! Ipsam, qui sint! Optio inventore ea maxime repellat impedit alias modi numquam debitis cumque sequi? Labore quis, deserunt eius nobis fugiat sit atque officiis eos velit! Veritatis consectetur natus, architecto, ea reprehenderit quo aliquid libero possimus sint eos provident ab ad esse distinctio maiores sunt molestiae vitae fuga non error laboriosam voluptatum. Officia nobis, non accusamus vero mollitia assumenda? Minus rerum laboriosam amet ipsa odio optio accusantium porro vel nobis corrupti omnis maiores nisi, dolore rem repudiandae exercitationem quaerat quod assumenda corporis adipisci suscipit sunt reiciendis eum libero? Repellendus praesentium temporibus excepturi cupiditate blanditiis possimus corporis quas ipsa architecto. Dolores in nostrum facilis architecto. Magni ex illum doloribus sit soluta reprehenderit fugiat illo ipsum laudantium neque, optio totam iste eos repudiandae beatae, impedit dolor quisquam ipsam aliquam autem! Quasi.</p>
                {/* <button onClick={getjewellary} className="btn btn-info btn-lg">Jewellary</button> */}
                {
                    jewellary.length>0 ? 
                    <div className="d-flex justify-content-evenly gap-4">
                        {
                            jewellary.map(function(jewellaryproducts){
                                return <Jewellarycard jewellaryproducts={jewellaryproducts}/>;
                            })
                        }

                    </div> :
                    <h2 style={{color:"gray", textAlign:"Center"}}>Data Not Found</h2>
                }
            </div>
    )
}

export default Jewellary;
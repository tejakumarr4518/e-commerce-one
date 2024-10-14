import React from "react";
import "./Mensfashion.css";
import { mensService } from "../services/mensService/MensService";
import { useState,useEffect} from "react";
import Mensfashions from "./Mensfashions";


function Mensfashion(){
    useEffect(()=>{
        getmenswear();
    })
 
 
    let[menswear,setMenswear]=useState([])
    const getmenswear=()=>{
        mensService().then((res)=>{
                    console.log(res.data);
                    setMenswear(res.data);
        }).catch((Error)=>{
                console.log(Error);
        })
     }
    return(
        <div className="mensfashion">
            <h2>Men's Fashion</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam modi alias ex animi nostrum voluptatibus debitis tempora quasi impedit a libero quisquam asperiores provident aspernatur aliquam sint architecto, labore voluptatum aperiam totam maiores et ipsum eius! Corporis molestiae, distinctio in corrupti quia culpa quaerat aspernatur odio, placeat, numquam consequuntur delectus modi libero? Labore fugit aliquid incidunt atque laudantium a sit nostrum repudiandae fugiat, molestias, dolorem temporibus et laboriosam numquam suscipit rem? Quasi nihil voluptatem, harum vitae blanditiis ipsum nobis minima debitis facilis? Minus porro veritatis quidem voluptas amet ullam labore dolores odit dolore eaque doloribus aut aliquid perferendis vero nulla explicabo, maiores quasi perspiciatis architecto quisquam quos iure libero aspernatur? Commodi doloribus omnis cupiditate. Pariatur, distinctio doloribus tenetur unde modi cupiditate rerum sit animi vero ex eos explicabo, debitis eligendi dolorum doloremque vitae optio. Porro quo beatae laboriosam excepturi placeat sed quibusdam, officiis iure ipsam harum, mollitia officia, corporis eligendi ab saepe quod aut consequuntur quos dolor nihil quaerat. Aut totam dolore, culpa debitis eaque sit deserunt dolorem quas! Sunt minus voluptatibus nostrum nobis quasi cupiditate libero non illo. Natus similique, optio consequuntur ad, magni et numquam quod obcaecati quae fugit eligendi eum debitis officiis, amet esse! Corrupti, voluptatem.</p>
            {/* <button onClick={getmenswear} className="btn btn-danger btn-lg">Men's Wear</button> */}
            {
                menswear.length>0 ? 
                <div className="d-flex justify-content-evenly gap-4">
                   {
                    menswear.map(function(mens){
                        return <Mensfashions mens={mens}/>
                    })
                   }
                </div>
                :
                <h2 style={{textAlign:"center",color:"purple" }}>Data Not Found</h2>
            }
        </div>
    )
}
export default Mensfashion;
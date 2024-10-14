import React from 'react';
import "./Electronics.css";
import { electronicsService } from '../services/electronics/ElectronicsService';
import { useState,useEffect } from 'react';
import Electronic from './Electronic';
function Electronics () {
useEffect(()=>{
      getElectronics();
},[])

 
let [electronicsproduct,setelectronicsproduct]=useState([]);
     var getElectronics=()=>{
       electronicsService().then((res)=>{
            console.log(res.data);
            setelectronicsproduct(res.data);
       }).catch((Error)=>{
            console.log(Error); 
       })
     } 
      
  return (
    <div className="electronicsContainer">
      <h2>Electronics </h2>
      <div className="electronicbgimages">

      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, error maxime et fugit ipsam asperiores eveniet culpa eaque, voluptatum itaque non mollitia natus ut excepturi eos neque quia doloribus, autem molestiae officia laudantium nostrum. Dolorum recusandae dolores molestias reprehenderit ex eos ut amet ipsam quas. Nihil rem vero aperiam quae deleniti repellendus magnam illo eveniet aliquid vitae accusantium veniam optio ex corporis ratione culpa asperiores, iste dolorum nisi natus minus? Optio, nisi veritatis quia nostrum voluptatibus quisquam eum libero velit natus tempore voluptas officia vero repellat debitis vitae fuga consectetur consequatur quibusdam quo id. Consectetur velit dicta modi repellat perspiciatis voluptates ab fugit quae nihil error, libero aperiam molestias ratione expedita quas voluptate rem harum quasi laudantium at ut nulla quaerat. Eius, facilis neque. Molestiae deleniti aliquid dolore excepturi hic ipsum nihil ullam reiciendis debitis, numquam consequatur et quaerat mollitia officiis obcaecati quidem iste dolor. Officiis aspernatur a voluptas necessitatibus sapiente enim cum voluptatibus nobis illum inventore! Corporis eius labore totam ex quae quisquam, repudiandae, quos fuga ipsam voluptates alias aliquam natus? Dolorem accusamus numquam temporibus sit, at earum veniam vel sapiente exercitationem vero nihil sed alias hic deserunt aut natus! Quia illo nesciunt asperiores, autem quasi ad, tempora minus quisquam, debitis possimus ea eum aliquam unde iure minima nam animi! Suscipit odio hic aperiam reiciendis in. Numquam magni sint distinctio, fugiat ullam eaque reiciendis, sit expedita officiis laudantium harum quia amet? Non, rem pariatur assumenda fugit debitis maiores dignissimos nisi voluptas vero perspiciatis! Nulla sint consequatur fuga nam error aliquam libero cumque aspernatur fugiat possimus tempora, quis quibusdam accusamus aliquid saepe velit ex nobis officia ipsum molestias reiciendis, eaque doloremque ea. Fuga, accusamus voluptate qui atque vero blanditiis dolorem minima eveniet placeat omnis vitae excepturi, in aut et, est cum pariatur nulla distinctio quod. Quae odio eum deleniti voluptatibus?</p>
      {/* <button onClick={getElectronics} className="btn btn-primary btn-lg" >Electronics</button> */}
      {
        electronicsproduct.length>0? 
        <div className="d-flex justify-content-evenly gap-3 flex-wrap">
           {
            electronicsproduct.map(function(product){
              return <Electronic product={product}/>
            })
           }
        </div>
        :
        <h2 style={{textAlign:"center",color:"red"}}>Data Not Found</h2>
      }
    </div>
 
  )
}

export default Electronics;

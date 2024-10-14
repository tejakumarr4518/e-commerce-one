import { WomensService } from "../services/womensService/WomensService";
import "./Womensfashion.css";
import { useState,useEffect} from "react";
import Womensfashions from "./womensfashions";


function Womensfashion(){
    useEffect(()=>{
        getwomenswear();
    })
    
 
   let[womenswear,setWomensWear]=useState([])
    const getwomenswear=()=>{
        WomensService().then((res)=>{
            console.log(res.data);
            setWomensWear(res.data);
        }).catch((Error)=>{
            console.log(Error);
        })
       
    }
    return(
        <div className="womencloths">
            <h2>Women's Fashion</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium non obcaecati quo unde, dicta et pariatur possimus eius laboriosam vero reprehenderit vitae cumque accusamus quod numquam molestiae? Provident minima praesentium tempore esse modi incidunt dolorum dolore. Facere maiores perferendis eveniet adipisci natus necessitatibus consectetur eius unde nisi hic tempora quaerat ipsa cupiditate consequatur itaque eos, laudantium dolor dolore incidunt maxime accusamus! Praesentium facere nemo laboriosam eveniet, saepe tenetur inventore, ullam ipsam eaque, dolorem repellendus. Iusto optio, odio culpa, eos ullam amet iste illum laborum voluptatem labore temporibus repellat ipsa facere ea voluptatum. Beatae sequi ea ratione unde rem sunt perferendis tempore laborum a doloremque doloribus, fuga in nesciunt animi exercitationem ipsum incidunt cupiditate accusantium blanditiis fugiat pariatur quasi impedit qui. Incidunt quasi maiores culpa porro. Officia eveniet ipsum facilis sint eum a repellat, iste itaque numquam praesentium, nesciunt excepturi. Debitis nihil nobis error eligendi ratione quia alias facere! Distinctio quam officia consequuntur architecto facilis? Voluptates neque provident delectus quis dignissimos numquam inventore facilis nesciunt laudantium aliquam sed corporis, praesentium repellendus molestias non magni expedita quisquam nobis rem voluptatem dicta ut eveniet cum? Corrupti accusantium ad, quidem dolorem repellat, totam quae, officia soluta voluptate laboriosam fugiat at ratione quibusdam labore?</p>
            {/* <button onClick={getwomenswear} className="btn btn-success btn-lg">Women's wear</button> */}
            {
                womenswear.length>0 ? 
                <div className="d-flex gap-4 justify-content-evenly flex-wrap">
                    {
                        womenswear.map(function(womens){
                            return <Womensfashions womens={womens}/>
                        })
                    }
                </div> 
                :
                <h2 style={{textAlign:"center",color:"brown"}}>Data Not Found</h2> 
            }
        </div>
    )
}
export default Womensfashion;
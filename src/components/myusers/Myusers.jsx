import { Getusersinfo } from "../myservice/Myservice";
import Myuser from "../myuser/Myuser";
import  "./Myusers.css";
import React from "react";
import { useState } from "react";

function Myusers(){
    const[user,setUser]=useState([])
   const getMyUsers=()=>{
     var promiseobject=Getusersinfo(); 
     promiseobject.then((user)=>{
            console.log(user.data.results);
            setUser(user.data.results)
     }).catch((Error)=>{
        alert("Failed to get user data")
     }) 
    }
    return(
        <div className="usersinformation">
            <h2>Myusers Information</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus placeat doloremque tenetur veniam ad tempore odit autem optio officia a cumque in, nisi numquam dolorum omnis magni dignissimos maiores nihil ullam ipsum velit reprehenderit libero illo perspiciatis! Commodi voluptate pariatur ipsum tempore placeat corporis culpa sequi minus vel, suscipit ad, provident cum non, autem ut numquam. Voluptatum, et corporis quod ipsa iure quo, ullam hic enim saepe earum nesciunt tempore voluptatem. Voluptas deserunt, magni tempora laboriosam sapiente temporibus delectus voluptatem ut commodi! Minima, laboriosam ex nisi nulla dolorem quidem beatae aut consequatur porro rerum neque totam, eligendi asperiores necessitatibus ipsum dignissimos, eaque non sequi aliquid harum voluptatibus! Consectetur rerum blanditiis illo tempora perspiciatis aspernatur similique, repudiandae praesentium vitae expedita saepe, quae sint eaque repellat quas eos reiciendis ipsum unde dolorem minus minima iusto? Fugiat quidem ullam ut est dolorem alias rerum pariatur veniam at numquam eveniet voluptatum dolor doloribus iusto eligendi veritatis beatae, aliquid inventore ipsum dolorum quas excepturi deleniti vitae. Rem hic, rerum vel reprehenderit accusamus vero velit at veritatis aliquid repellat, consectetur molestias enim corrupti dolor eos expedita quod. Quasi ea minima voluptas. Ab corrupti, sunt natus praesentium, nobis, voluptates dolores quae quas blanditiis repellat quaerat voluptas deleniti.</p>
            <button onClick={getMyUsers}>Get Users</button>
            <div className="Myusercontainer">
        {
            user.map((element,index)=>{
                return <Myuser Myuser={element}/>
            })
        }
        </div>
        </div>

    )
}
export default Myusers;
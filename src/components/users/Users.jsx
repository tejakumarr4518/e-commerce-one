import "./Users.css";
import React, { useState } from "react";
import { getUsers } from "../axios/service/Service";
import User from "../user/User";
function Users(){
    let[users,setUsers]=useState([]);
    const sendrequest=()=>{
   var promiseobject=getUsers();
   promiseobject.then((users)=>{
           console.log(users.data.results) ;
           setUsers(users.data.results)
   }).catch((error)=>{
         alert("failed to get users data");
   })
    }
 return(
        <div className="userscontainer">
            <h2>Users Information</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At debitis obcaecati quo adipisci unde libero nemo amet enim quia quasi, reiciendis tempore reprehenderit provident sapiente incidunt nihil nam cumque temporibus! Architecto ut labore quidem, sapiente quia perferendis odio ducimus commodi assumenda voluptas! Necessitatibus et eos ab, adipisci exercitationem esse consequatur itaque possimus dicta sapiente deserunt sed alias delectus suscipit iste quam aspernatur ullam nobis explicabo ea excepturi? Odio, nostrum, tempora consequatur quis nemo optio amet eum eveniet illum voluptatem laboriosam at dignissimos fuga repellat nesciunt incidunt, obcaecati et itaque mollitia. Ab reiciendis non ratione voluptate corrupti pariatur doloribus, eveniet ipsum veniam dignissimos sequi quod! Soluta illum adipisci sequi nesciunt culpa, doloremque perferendis nostrum repellat harum nam corporis aperiam blanditiis? Distinctio, iure ex nemo provident sint ipsa omnis similique praesentium in tempora accusamus optio at. Minus velit quas corrupti ab omnis, magnam, ipsum cumque eligendi voluptatum quasi, vero consectetur assumenda harum enim laborum quam excepturi! Mollitia minima debitis atque in vel. Quam hic illo iusto, dolores ut excepturi eos enim cupiditate dignissimos quia exercitationem molestiae error fuga, magnam atque ipsam velit amet deserunt molestias ad asperiores libero. Consequatur illo dolorem modi cum molestiae laboriosam et, assumenda odio earum eum, eligendi doloremque.
            </p>
            <button onClick={sendrequest}>Get Users</button>
            <div className="userContainerStyle">
           {
            users.map((element,index)=>{
                return <User user={element}/>
            })
           }
            </div>
        </div>
    )
}
export default Users;

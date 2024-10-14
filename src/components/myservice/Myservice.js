import axios from "axios";
 export function Getusersinfo(){
    var promiseobject=axios.get("https://randomuser.me/api/?results=4");
 return promiseobject;
}

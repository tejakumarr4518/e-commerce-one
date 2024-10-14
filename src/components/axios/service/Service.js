import Axios from "axios";

  export function getUsers(){
    var promiseobject=Axios.get("https://randomuser.me/api/?results=20");
        return promiseobject;
}
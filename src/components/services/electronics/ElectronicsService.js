import axios from "axios"
 export function electronicsService(){
   var promiseobj=axios.get("http://localhost:3000/categories_electronics");
   return promiseobj;
}
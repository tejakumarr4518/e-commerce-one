 import axios from "axios";
 export function WomensService(){
   var promiseobj=axios("http://localhost:3000/categories_womensclothing");
   return promiseobj;
}
 import React from "react";
 import axios from "axios";
 export function mensService (){
           var promiseobj=axios("http://localhost:3000/categories_mensclothing");
         return  promiseobj;
}
import React from "react";
import axios from "axios"
export function jewellaryService (){
        var promiseobj=axios("http://localhost:3000/categories_jewelery");
        return promiseobj;
}
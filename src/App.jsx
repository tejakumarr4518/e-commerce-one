// import Userdetails from "./components/userdetails/Userdetails";
// import Users from "./components/users/Users";
//  import Myuser from "./components/myuser/Myuser";
// import Myusers from "./components/myusers/Myusers";
import Home from "./components/home/Home";
import Electronics from "./components/electronics/Electronics";
import Jewellary from "./components/jewellary/Jewellary";
import Mensfashion from "./components/mensfashion/Mensfashion";
import Navbar from "./components/navbar/Navbar";
import Womensfashion from "./components/womensfashions/Womensfashion";
import Cart from "./components/cart/Cart";


import { Route ,Routes,Navigate} from "react-router-dom";
import Pagenotfound from "./components/pagenotfound/Pagenotfound";
import ElectronicDetails from "./components/electronicdetails/Electronicdetails";
import Jewellarydetails from "./components/jewellarydetails/Jewellarydetails";
import Mensfashiondetails from "./components/mensfashiondetails/Mensfashiondetails";
import Womensfashiondetails from "./components/womensfashiondetails/Womensfashiondetails";
import Profile from "./components/profile/Profile";
import Educational from "./components/details/Educational";
import Professional from "./components/details/Professional";
import Personal from "./components/details/Personal";
<Cart/>


// import Usersinfo from "./components/usersinfo/Usersinfo";

// import Users from "./components/users/Users";
function App(){
  return( <div>
      {/* <Users/> */}
      {/* <Myuser/> */}
      {/* <Users/> */}
      {/* <Myusers/> */}
      {/* <Usersinfo/> */}
    
      <Navbar/>
      <Routes>
      <Route path={"/Home"} element={<Home/>}/>
      <Route path={"/Electronics"} element={<Electronics/>}/>
      <Route path={"/Jewellary"} element={<Jewellary/>}/>
      <Route path={"/Men's"} element={<Mensfashion/>}/>
      <Route path={"/Women's"} element={<Womensfashion/>}/>
      <Route path={"/Electronicdetails/:ID"} element={<ElectronicDetails/>}/>
      <Route path={"/Jewellarydetails/:id"}element={<Jewellarydetails/>}/>
      <Route path={"/Mensdetails/:id"}element={<Mensfashiondetails/>}/>
     <Route path={"/Womenswear/:id"} element={<Womensfashiondetails/>}/>
     <Route path={"/Cart"} element={<Cart/>}/>


     <Route path={"/Profile"} element={<Profile/>}>
     {/* <Route path="" element={<Navigate to="Personal"/>}/> */}
     <Route index path="" element={<Navigate to="Personal"/>}/>
        <Route index path={"Personal"} element={<Personal/>}/>
        <Route path={"Professional"} element={<Professional/>}/>
        <Route path={"Educational"} element={<Educational/>}/>
      </Route>


      <Route path={"*"} element={<Pagenotfound/>}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      </Routes>
</div>
  )
}
export default App;

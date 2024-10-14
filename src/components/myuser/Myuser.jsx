import "./Myuser.css"
function Myuser({Myuser}){
    return(
        <div className="usersinfo">
            <img src={Myuser.picture.large} width={"100%"} height={"300px"}/>
            <p>{Myuser.name.first}{Myuser.name.last}</p>
            <p>{Myuser.gender}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aliquam.</p>
            <button>Getusers</button>
        </div>
    )
}
export default Myuser;
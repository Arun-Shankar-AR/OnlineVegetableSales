import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserByEmailAction } from "../../actions/userActions";

function Vegetable(){

  let navigate = useNavigate();

  const[vegetable,setVegetable] = React.useState([]);

  const[vegName,setVegName] = React.useState('');

  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.login);
  const nuser = useSelector((state) => state.user.user );

  let user = nuser.userId;

  useEffect(() => {
      dispatch(getUserByEmailAction(login.email));
      getAllVegetables();
    }, []);

    function getAllVegetables(){
      axios.get("http://localhost:8080/vegetable/all").then((response)=>{
            setVegetable(response.data)
            console.log(response.data)   
        })
        .catch((errors)=>{console.log(errors)})
    }
    
    function searchVegetable()
    {
        navigate(`/vegetable/all/${vegName}`)
    }

    const handleChange = (event) => {
      console.log(event.target.value);
  
      setVegName(event.target.value);
    }

    function addToCart(id){
      let cart = {
        "userId" : user,
        "vegetableId" : id,
      }
      axios.post("http://localhost:8080/cartController/addVegetableToCart",cart).then((response)=>{
        console.log(response.data)
        alert("Vegetable added to cart")
    })
  }

    return(
      <div className="h">
          <h2 class="text-center my-5">Vegetables</h2>
          <div class="input-group">
            <div class="form-outline">
            <input style={{marginLeft:'10px'}} type="search" id="form1" class="form-control" placeholder="Enter name..."
                value={vegName}
                onChange={handleChange}/>
            </div>
            <button style={{marginLeft:'20px',borderRadius:'10px'}} type="button" class="btn btn-dark"onClick={searchVegetable}>Search
            </button>
            </div>
            <br/>
            <br/>
            <div style={{rowGap:'40px'}} class="row">
              {
                vegetable.map((vegetable) =>
                  <div  class="col-lg-3 col-md-3 col-12">
                    <div class="card" >
                    <img src={vegetable.vegetablePicture} style={{height:'200px',width:'196px',padding:"10px"}} class="card-img-top" />
                      <div class="card-body">
                        <h4 class="card-title">{vegetable.vegetableName}</h4>
                        <h5 class="card-title">Rs.{vegetable.vegetablePrice}</h5>
                        {login.loginStatus === "LoggedIn" && (
                          <button onClick={()=>addToCart(vegetable.vegetableId)} class="btn btn-primary">Add To cart</button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              }
          </div>
        </div>
  )
}

export default Vegetable;

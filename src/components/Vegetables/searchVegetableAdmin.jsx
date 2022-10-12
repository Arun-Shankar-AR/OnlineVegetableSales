import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";

function SearchVegetableAdmin(){

  let navigate = useNavigate();

  const[vegetable,setVegetable] = React.useState({});

  const name = useParams().vegName;

  useEffect(() => {
      getVegetableByName();
    }, []);

    function getVegetableByName(){
      axios.get("http://localhost:8080/vegetable/getByName/"+name).then((response)=>{
        console.log(response.data.status)
        if(response.data.status===404)
        {
            alert("Vegetable not found with name : "+name);
            navigate("/vegetable/alladmin")
        }
            setVegetable(response.data)
            console.log(response.data)   
        })
        .catch((errors)=>{console.log(errors)})
    }

    function deleteVegetable(id){
        axios.delete(`http://localhost:8080/vegetable/delete/${id}`).then( id => {
            navigate("/vegetable/alladmin")
        })
        .catch((errors)=>{console.log(errors)})
    }

    function updateVegetable(id){
        navigate(`/vegetable/update/${id}`)
    }

    return(
        <div className="h" style={{backgroundSize:'cover'}}>
            <div class="container m-5">
                <h2 style={{fontStyle:'normal'}} class="text-center my-5">Vegetables</h2>
                <br/>
                <br/>
                <div style={{rowGap:'40px'}} class="row">
                    {
                        <div  class="col-lg-3 col-md-3 col-12">
                            <div class="card" >
                            <img src={vegetable.vegetablePicture} style={{height:'200px',width:'196px',padding:"10px"}} class="card-img-top" />
                                <div class="card-body">
                                    <h4 class="card-title">{vegetable.vegetableName}</h4>
                                    <h5 class="card-title">Rs.{vegetable.vegetablePrice}</h5>
                                    <button onClick={()=>updateVegetable(vegetable.vegetableId)} style={{marginRight:'20px'}} class="btn btn-warning"> Update </button>
                                    <button onClick={()=>deleteVegetable(vegetable.vegetableId)} class="btn btn-danger"  > Delete </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
      </div>
  )
}

export default SearchVegetableAdmin;
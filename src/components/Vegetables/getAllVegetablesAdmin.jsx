import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";

function VegetableAdmin(){

  let navigate = useNavigate();

  const[vegetable,setVegetable] = React.useState([]);

  const[vegName,setVegName] = React.useState('');

  useEffect(() => {
      getAllVegetables();
    }, []);

    function getAllVegetables(){
      axios.get("http://localhost:8080/vegetable/all").then((response)=>{
            setVegetable(response.data)
            console.log(response.data)   
        })
        .catch((errors)=>{console.log(errors)})
    }

    function deleteVegetable(id){
        axios.delete(`http://localhost:8080/vegetable/delete/${id}`).then( id => {
            const veg = vegetable.filter((vegetable) =>vegetable.vegetableId != id)
            setVegetable(veg);
            getAllVegetables();
        })
        .catch((errors)=>{console.log(errors)})
    }
    
    function updateVegetable(id){
        navigate(`/vegetable/update/${id}`)
    }

    function AddVegetable()
    {
        navigate('/vegetable/add')
    }

    function searchVegetable()
    {
        navigate(`/vegetable/alladmin/${vegName}`)
    }

    const handleChange = (event) => {
      console.log(event.target.value);
  
      setVegName(event.target.value);
    }

    return(
          <div className="h" >
            <div >
            <h2 class="text-center my-5">Vegetables</h2>
            <br/>
              <div class="input-group">
                <div class="form-outline">
                  <input style={{marginLeft:'10px'}} type="search" id="form1" class="form-control" placeholder="Enter name..."
                        value={vegName}
                        onChange={handleChange}/>
                </div>
                <button style={{marginLeft:'20px',borderRadius:'10px'}} type="button" class="btn btn-dark"onClick={searchVegetable}>Search
                </button>
                <button onClick={AddVegetable} style={{marginLeft:'970px',borderRadius:'10px'}} class="btn btn-dark float-end" >Add Vegetable</button>
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
                          <button onClick={()=>updateVegetable(vegetable.vegetableId)} style={{marginRight:'20px'}} class="btn btn-warning"> Update </button>
                          <button onClick={()=>deleteVegetable(vegetable.vegetableId)} class="btn btn-danger"  > Delete </button>
                        </div>
                      </div>
                    </div>    
                    )
                  }
                </div>
          </div>
        </div>
  )
}

export default VegetableAdmin;

/*<label class="form-label" for="form1" onClick={searchVegetable}>Search</label>*/
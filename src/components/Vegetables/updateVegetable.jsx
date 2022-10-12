import axios from "axios";
import React, { useState } from "react";
import "./style.css";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateVegetable = () => {

  let navigate = useNavigate();

  let vegId = useParams().id;

  const [vegetable, setVegetable] = useState({
    vegetableId:"",
    vegetableName: "",
    vegetablePrice: "",
    vegetablePicture: "",
    vegetableQuantity: ""
  });


  useEffect(() => {
    getVegetableByName();
  }, []);

  function getVegetableByName(){
    axios.get("http://localhost:8080/vegetable/getById/"+vegId).then((response)=>{
      console.log(response.data.status)
      if(response.data.status===404)
      {
          alert("Vegetable not found with id : "+vegId);
      }
          setVegetable(response.data)
          console.log(response.data)   
      })
      .catch((errors)=>{console.log(errors)})
  }

  const handleChange = (event) => {
    console.log(event.target.name); 
    console.log(event.target.value); 

    const newVegetable = { ...vegetable };

    newVegetable[event.target.name] = event.target.value;

    setVegetable(newVegetable);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(vegetable.vegetableName==="")
    {
      alert("Enter valid vegetable name");
      return;
    }
    if(vegetable.vegetablePicture==="")
    {
      alert("Enter valid vegetable picture");
      return;
    }
    if(vegetable.vegetablePrice==="" || vegetable.vegetablePrice<10 || vegetable.vegetablePrice>100 )
    {
      alert("Vegetable price should be from 10 to 100");
      return;
    }
    if(vegetable.vegetableQuantity<1 || vegetable.vegetableQuantity==="")
    {
      alert("Quantity should be atleast 1");
      return;
    }

    const newVegetable = {
      vegetableId: vegetable.vegetableId,
      vegetableName: vegetable.vegetableName,
      vegetablePrice: vegetable.vegetablePrice,
      vegetablePicture: vegetable.vegetablePicture,
      vegetableQuantity: vegetable.vegetableQuantity
    };

    axios 
      .put("http://localhost:8080/vegetable/update/"+vegetable.vegetableId, newVegetable)
      .then((res) => {
        console.log(res);
        alert("Updated vegetable " + res.data.vegetableName + " successfully!");
        navigate("/vegetable/alladmin");
      })
      .catch((error) => console.log(error));
  };
  console.log(vegetable);
  return (
    <div className="update">
    <div className="w-25 mx-auto mt-3">
      <p style={{fontWeight:'bold'}} className="display-6">Update Vegetable</p>
      <form className="border border-5 p-3 border-dark" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label float-start">
            Vegetable Id
          </label>
          <input
            type="number"
            className="form-control"
            id="vegetableId"
            value={vegetable.vegetableId}
            name="vegetableId"
            onChange={handleChange}
          />
        </div>
        <div >
          <label className="form-label float-start">
            Vegetable Name
          </label>
          <input
            type="text"
            className="form-control"
            id="vegetableName"
            value={vegetable.vegetableName}
            name="vegetableName"
            onChange={handleChange}
          />
        </div>
        <br/>
        <div >
          <label className="form-label float-start">
            Vegetable Price
          </label>
          <input
            type="number"
            className="form-control"
            id="vegetablePrice"
            value={vegetable.vegetablePrice}
            name="vegetablePrice"
            onChange={handleChange}
          />
        </div>
        <br/>
        <div >
          <label className="form-label float-start">
            Vegetable Picture
          </label>
          <input
            type="text"
            className="form-control"
            id="vegetablePicture" 
            value={vegetable.vegetablePicture}
            name="vegetablePicture"
            onChange={handleChange}
          />
        </div>
        <br/>
        <div >
          <label className="form-label float-start">
            Vegetable Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="vegetableQuantity"
            aria-describedby="emailHelp"
            value={vegetable.vegetableQuantity}
            name="vegetableQuantity"
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div className="d-grid gap-2">
          <button type="submit" onClick={handleSubmit} className="btn btn-success" >
            Update
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateVegetable;
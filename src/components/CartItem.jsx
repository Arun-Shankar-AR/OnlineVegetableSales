import { React, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserByEmailAction } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import {
  BASE_URL,
  
  DELETE_VEGETABLE_FROM_CART_ENDPOINT,
  INCREASE_VEGETABLE_QUANTITY_ENDPOINT,
  DECREASE_VEGETABLE_QUANTITY_ENDPOINT,
} from "../Constants/apiEndpoints";
//import { getUserInfo } from "./../../Utils/UserInfo";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const initialData = {
  vegetableId: "",
  vegetableName: "",
  vegetablePrice: "",
  vegetablePicture: "",
  vegetableQuantity:""
};

export default function CartItem(props) {

  let navigate = useNavigate();

  const [data, setData] = useState(initialData);

  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.login);
  const nuser = useSelector((state) => state.user.user ) 
  //const userId = getUserInfo().userId;
  const userId = nuser.userId;

  {console.log(props.vegetableId)}
  useEffect(() => {
    dispatch(getUserByEmailAction(login.email));
    axios.get("http://localhost:8080/vegetable/getById/"+props.vegetableId).then((response)=>{
          setData(response.data)
          console.log(response.data)   
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.vegetableId]);

  // Handle Increase Quantity
  const handleIncreaseQuantity = () => {
    axios
      .put(
        BASE_URL +
          INCREASE_VEGETABLE_QUANTITY_ENDPOINT +
          userId +
          "/" +
          props.vegetableId
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      }); 
  };

  // Handle Reduce Quantity
  const handleReduceQuantity = () => {
    axios
      .put(
        BASE_URL +
          DECREASE_VEGETABLE_QUANTITY_ENDPOINT +
          userId +
          "/" +
          props.vegetableId
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle Delete Vegetable from Cart
  const handleDelete = () => {
    console.log("Delete clicked");
    axios
      .delete(
        BASE_URL +
          DELETE_VEGETABLE_FROM_CART_ENDPOINT +
          userId +
          "/" +
          props.vegetableId
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(data.vegetableName)
  return (
    
    <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
      
      <div className="d-flex flex-column align-items-center product-details">
        <span className="font-weight-bold text-dark">{props.vegetableId}</span>
      </div>
      
      <div className="d-flex flex-column align-items-center product-details">
        <span className="font-weight-bold text-dark">{data.vegetableName}</span>
      </div>
      
      <div className="d-flex flex-column align-items-center product-details">
        <span className="font-weight-bold text-dark">
          {data.vegetablePrice}
        </span>
      </div>
      
      <div className="d-flex flex-row align-items-center qty">
        <IconButton color="error" onClick={handleReduceQuantity}>
          <RemoveIcon />
        </IconButton>
        <h5 className="mt-1 mr-2 ml-2">{props.quantity}</h5>
        <IconButton color="success" onClick={handleIncreaseQuantity}>
          <AddIcon />
        </IconButton>
      </div>
      
      <div>
        <h5 className="text-grey">Rs. {props.totalAmount}</h5>
      </div>

      <div className="d-flex align-items-center">
        <IconButton color="error" value={props.id} onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

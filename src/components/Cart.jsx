import { React, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserByEmailAction } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import {
    BASE_URL,
    CLEAR_CART_ENDPOINT,
    GET_CART_ENDPOINT,
  } from "../Constants/apiEndpoints";

import "../css/Cart.css";
import CartItem from "./CartItem";

export default function Cart() {
    const [cart, setCart] = useState({});

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const login = useSelector((state) => state.login.login);
    const nuser = useSelector((state) => state.user.user ) 
    //const userId = getUserInfo().userId;
    const userId = nuser.userId;
    //const [orderId, setOrderId] = useState();

    useEffect(() => {
      dispatch(getUserByEmailAction(login.email));
        axios
          .get(BASE_URL + GET_CART_ENDPOINT + userId)
          .then((response) => {
            setCart(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [userId]);
    
      console.log(cart);

// function to clear cart
const clearCart = () => {
  
      // clear food cart
      // clear cart
      axios
        .get(BASE_URL + CLEAR_CART_ENDPOINT + userId)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      alert("Cart Cleared Successfully");
      
};

function feedback(){

  navigate('/feedback')
}


return (
    <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
            <div className="col-md-8">
              <div className="p-2">
                <h1>Cart</h1>
              </div>
              
              <div>
                {/* Cart Item Loop Start */}
                {cart?.cartItems &&
                  cart.cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      vegetableId={item.vegetableId}
                      quantity={item.quantity}
                      totalAmount={item.totalAmount}
                    />
                  ))}
              </div>
              {/* Cart Item Loop End */}
              <div className="d-flex mt-4 px-3 rounded">
                <div className="col-md-6">
                  <div className="p-2">
                    <h5>Total</h5>
    
                    <h5 className="text-grey">Rs. {cart.cartTotal}</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-2 text-right">
                    <button style={{marginLeft:'10px'}} className="btn btn-primary"  onClick={clearCart}>
                      Clear
                    </button>
                    <button style={{marginLeft:'10px'}} className="btn btn-primary" onClick={feedback}>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
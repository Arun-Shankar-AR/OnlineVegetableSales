import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Order from './Order.jsx';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


function Edit(){
    const[orderId, setOrderId]=useState('');
    const[userId, setUserId]=useState('');
    const[vegetableId, setVegetableId]=useState('');
    const[quantity, setQuantity]=useState('');
    const[totalAmount, setTotalAmount]=useState('');
    const[orderDate, setOrderDate]=useState('');
    const[status, setStatus]=useState('');

    let history= useNavigate();

    var index = Order.map (function(e){
        return e.orderId

    }).indexOf(orderId);


    const handleSubmit =() => {
        let data = {
            orderId: orderId,
            userId: userId,
            vegetableId: vegetableId,
            quantity: quantity,
            totalAmount: totalAmount,
            orderDate: orderDate,
            status: status
        }
       console.log(data);
        axios.put("http://localhost:8080/order/update/" +orderId, data)
        .then(res=>{
            console.log(res);
            alert("updated successfully");
            history("/orderHome");
        })
        .catch(function (err) {
            console.log(err);
        })
    }

    useEffect(()=>{
    
        setUserId(localStorage.getItem('userId'))
        setVegetableId(localStorage.getItem('vegetableId'))
        setQuantity(localStorage.getItem('quantity'))
        setTotalAmount(localStorage.getItem('totalAmount'))
        setOrderDate(localStorage.getItem('orderDate'))
        setStatus(localStorage.getItem('status'))
        setOrderId(localStorage.getItem('orderId'))
    },[])

    return(<div>
         <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <h1>Update The Details</h1>
         <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter order Id" value={userId} required onChange={(e) =>setOrderId(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter user Id" value={userId} required onChange={(e) =>setUserId(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter vegetable Id" value={vegetableId} required onChange={(e) =>setVegetableId(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter quantity" value={quantity} required onChange={(e) =>setQuantity(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter total Amount" value={totalAmount} required onChange={(e) =>setTotalAmount(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter order Date" value={orderDate} required onChange={(e) =>setOrderDate(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter status" value={status} required onChange={(e) =>setStatus(e.target.value)}>
                </Form.Control>
            </Form.Group>
            
            <Button onClick={() => handleSubmit()}>Submit</Button>
        </Form>

    </div>)

}
export default Edit;
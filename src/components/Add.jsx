import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Order from './Order.jsx';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';

function Add(){
     
    const[userId, setUserId]=useState('');
    const[vegetableId, setVegetableId]=useState('');
    const[quantity, setQuantity]=useState('');
    const[totalAmount, setTotalAmount]=useState('');
    const[orderDate, setOrderDate]=useState('');
    const[status, setStatus]=useState('Success');

    let history= useNavigate();

    const handleSubmit =() => {

        let data = {
            userId: userId,
            vegetableId: vegetableId,
            quantity: quantity,
            totalAmount: totalAmount,
            orderDate: orderDate,
            status: status
        }
        
        if(userId==""){
            alert("user Id should not be left blank");
        }
        else if(vegetableId==""){
            alert("vegetable Id should not be left blank");
        }
        else if(quantity==""){
            alert("quantity should not be left blank");
        }
        else if(totalAmount==""){
            alert("total Amount should not be left blank");
        }
        else if(orderDate==""){
            alert("order date should not be left blank");
        }
      /*  else if(status==""){
            alert("status should not be left blank");
        }*/
        else{
        axios.post("http://localhost:8080/order/add", data)
        .then(res=>{
            console.log(res);
            alert("Added new order successfully");
        })
        .catch(function (err) {
            console.log(err);
        })
        history("/orderHome");
    }
    } 

   
    return <div>
        
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <h1>Add new Order</h1>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter user Id" required onChange={(e) =>setUserId(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter vegetable Id" required onChange={(e) =>setVegetableId(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter quantity" required onChange={(e) =>setQuantity(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter total Amount" required onChange={(e) =>setTotalAmount(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter order Date" required onChange={(e) =>setOrderDate(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control as="select" 
                    onChange={(e)=> setStatus(e.target.value)}
                    
                >
                    <option value="Success">Success</option>
                    <option value="Pending">Pending</option>
                    
                </Form.Control> 

            </Form.Group>
            
            <Button onClick={() => handleSubmit()} type= "submit" >Submit</Button>
        </Form>
    </div>
}

export default Add;
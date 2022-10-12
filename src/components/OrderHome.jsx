import React , {Fragment, useEffect} from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Order from './Order.jsx';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
function OrderHome(){

   
    let history = useNavigate();

    const handleEdit= (orderId, userId, vegetableId, quantity, totalAmount,orderDate, status) =>{
        localStorage.setItem('orderId', orderId);
        localStorage.setItem('userId', userId);
        localStorage.setItem('vegetableId', vegetableId);
        localStorage.setItem('quantity', quantity);
        localStorage.setItem('totalAmount', totalAmount);
        localStorage.setItem('orderDate', orderDate);
        localStorage.setItem('status', status);

    }


  const [orderData, setOrderData] = useState([]);

  

     useEffect(() => {
       getOrderDetails()
      });


      const getOrderDetails = () => {
        axios.get("http://localhost:8080/order/all")
        .then(res =>{
          //  console.log(res.data);
           setOrderData(res.data)        
        })
        .catch(function (error) {
            console.log(error.toJSON());
          });
      } 
      

      const handleDelete= (orderId) => {
      //  console.log("http://localhost:8080/order/order/delete/${orderId}");
        axios.delete("http://localhost:8080/order/delete/" +orderId)
        .then(res => {
            console.log(res);
            alert("deleted successfully");
        })
        .catch(function (err) {
            console.log(err);
        })
        getOrderDetails()

    }

       
      
     
  
        return(
        
            <Fragment>
                <div style={{margin:"10rem"}}>
                  <h1>Order Details</h1>
                  <br></br>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>
                                    orderId
                                </th>
                                <th>
                                    userId
                                </th>
                                <th>
                                    vegetableId
                                </th>
                                <th>
                                    quantity
                                </th>
                                <th>
                                    totalAmount
                                </th>
                                <th>
                                    orderDate
                                </th>
                                <th>
                                    status
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderData && orderData.length > 0
                                ?
                                orderData.map((item) =>{
                                    return(
                                        <tr>
                                            <td>
                                                {item.orderId}
                                            </td>
                                            <td>
                                                {item.userId}
                                            </td>
                                            <td>
                                                {item.vegetableId}
                                            </td>
                                            <td>
                                                {item.quantity}
                                            </td>
                                            <td>
                                                {item.totalAmount}
                                            </td>
                                            <td>
                                                {item.orderDate}
                                            </td>
                                            <td>
                                                {item.status}
                                            </td>
                                            <td>
                                                <Link to={'/edit'}>
                                                <Button onClick={() => handleEdit(item.orderId, item.userId, item.vegetableId, item.quantity, item.totalAmount, item.orderDate, item.status)}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => handleDelete(item.orderId)}>DELETE</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"
                            }
                        </tbody>
                    </Table>
                    <br>
                    </br>
                    <Link className='d-grid gap-2' to="/create">
                        <Button size="lg">Create</Button>
                    </Link>
                </div>
            </Fragment>
            );  
      
}


export default OrderHome;
import React from "react"
import {NavLink , Link} from "react-router-dom"
export function Admin()
{
    return(<div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vegetable Online Application</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item">
          <Link class="nav-link" to="/contact" Style={{color:"green"}}>contact</Link>
        </li>

 <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Customer </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><Link class="dropdown-item" to="/customer">Add Customer</Link></li>
            <li><Link class="dropdown-item" to="/view-all-customer">View all Customer</Link></li>
            <li><Link class="dropdown-item" to="/view-cus-by-id">View Customer by Id</Link></li>
            <li><Link class="dropdown-item" to="/view-cus-by-address">View Customer by Location</Link></li>
            <li><Link class="dropdown-item" to="/delete-cus-by-id">Delete Customer</Link></li>

          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vegetable
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="/vegetable">Add Vegetable</Link></li>
            
            <li><Link class="dropdown-item" to="/view-all-veg">View All Vegetable</Link></li>
            <li><Link class="dropdown-item" to="view-vegetable-by-Id">View Vegetable By Id</Link></li>
            <li><Link class="dropdown-item" to="/delete-vegetable-by-Id">Remove Vegetable</Link></li>

          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Order
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><Link class="dropdown-item" to="/order1">Add Order</Link></li>
            <li><Link class="dropdown-item" href="/view-order1">View Order</Link></li>
            <li><Link class="dropdown-item" href="/view-by-cusid1">View Order by Order NO</Link></li>
            <li><Link class="dropdown-item" href="/delete-order1">Delete Order by Order-NO </Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Billing
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="/billing">Add Bill</Link></li>
            <li><Link class="dropdown-item" to="/view-bill">View Bill</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Feedback
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="/view-feedback-by-vegId">View FeedBack By Vegetable Id</Link></li>
              <li><Link class="dropdown-item" to="/feedback">Add Feedback</Link></li>
            <li><Link class="dropdown-item" to="view-feedback-by-cusId">View Feedback by Customer Id</Link></li>

          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>

    )
}
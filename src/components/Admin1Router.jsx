import React from "react";


import '../App.css';
import { Admin } from '../Component/Admin';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Contact from '../Component/Contact';
import Customer from '../Component/Customer';
import Feedback from '../Component/Feedback';
import Order from '../Component/Order';
import ViewAllCustomer from '../Component/ViewAllCustomer';
import AddVegetable from '../Component/AddVegetable';
import Billing from '../Component/Billing';
import ViewCustomerById from '../Component/ViewCustomerById';
import ViewCustomerByAddress from '../Component/ViewCustomerByAddress';
import DeleteCustomerById from '../Component/DeleteCustomerById';
import ViewFeedbackByVegId from '../Component/ViewFeedbackByVegId';
import ViewFeedbackByCustomerId from '../Component/ViewFeedbackByCustomerId';
import ViewAllVegetable from '../Component/ViewAllVegetable';
import CustomerUpdate from '../Component/CustomerUpdate';
import ViewVegetableById from '../Component/ViewVegetableById'
import DeleteVegetableById from '../Component/DeleteVegetableById';
import ViewBill from '../Component/ViewBill';
import { CustomerHomePage } from '../CustomerHomepage';
import ReactRouter from '../Component/ReactRouter';
var sectionStyle = {
  width: "100%",
  height: "620px",
  backgroundImage:
    "url('http://www.fmhaca.gov.et/wp-content/uploads/2019/02/drugs-min-1200x620.jpg')",
};
export function Admin1Router() {
  return (
    <Switch>
      <Route exact path="/admin">
        <Admin />
        <div
          id="intro-example"
          className="p-5 text-center bg-image"
          style={sectionStyle}
        >
          <h1>
            <u>
              <i>Welcome Admin!!!</i>
            </u>
          </h1>
        </div>
      </Route>
      
<CustomerHomePage/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/customer" component={Customer}/>
<Route exact path="/feedback" component={Feedback}/>
<Route exact path="/order" component={Order}/>
<Route exact path="/view-all-customer" component={ViewAllCustomer}/>
<Route exact path="/vegetable" component={AddVegetable}/>
<Route exact path="/billing" component={Billing}/>
<Route exact path="/view-cus-by-id" component={ViewCustomerById}/>
<Route exact path="/view-cus-by-address" component={ViewCustomerByAddress}/>
<Route exact path="/delete-cus-by-id" component={DeleteCustomerById}/>
<Route exact path="/view-feedback-by-vegId" component={ViewFeedbackByVegId}/>
<Route exact path="/view-feedback-by-cusId" component={ViewFeedbackByCustomerId}/>
<Route exact path="/view-all-veg" component={ViewAllVegetable}/>
<Route exact path="/customer-update" component={CustomerUpdate}/>
<Route exact path="/view-vegetable-by-Id" component={ViewVegetableById}/>
<Route exact path="/delete-vegetable-by-Id" component={DeleteVegetableById}/>
<Route exact path="/view-bill" component={ViewBill}/>

      
    </Switch>
  );
}

export default ReactRouter;

import './App.css';

import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProfilePage from './components/ProfilePage';
import Registration from './components/Registration';
import Login from './components/Login';
import Logout from './components/Logout';
import UpdateUser from './components/UpdateUser';
import ResetPassword from './components/ResetPassword';
import ViewUsers from './components/ViewUsers';

import OrderHome from  './components/OrderHome';
import Add from './components/Add';
import Edit from './components/Edit';
import Vegetable from './components/Vegetables/getAllVegetables';
import SearchVegetable from './components/Vegetables/searchVegetable';
import AddVegetable from './components/Vegetables/addVegetable';
import VegetableAdmin from './components/Vegetables/getAllVegetablesAdmin';
import UpdateVegetable from './components/Vegetables/updateVegetable';
import SearchVegetableAdmin from './components/Vegetables/searchVegetableAdmin';

import { Admin } from './components/Admin';
//import ProfilePage from './components/ProfilePage';

import Feedback from './components/Feedback';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/updateprofile" element={<UpdateUser/>}/>
        <Route path="/updatepassword" element={<ResetPassword/>}/>
        <Route path="/users" element={<ViewUsers/>}/>
        <Route path="/not-found" element={<NotFound/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/orderHome' element={<OrderHome/>}/>
        <Route path="/create"  element={<Add />} />
        <Route path="/edit"  element={<Edit />} />
        <Route path="/vegetable/all" element={<Vegetable />} />
        <Route path="/vegetable/all/:vegName" element={<SearchVegetable />} />
        <Route path="/vegetable/add" element={<AddVegetable />} />
        <Route path="/vegetable/alladmin" element={<VegetableAdmin />} />
        <Route path="/vegetable/update/:id" element={<UpdateVegetable />} />
        <Route path="/vegetable/alladmin/:vegName" element={<SearchVegetableAdmin />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to ="/not-found" />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


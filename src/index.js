import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import UserManagement from './dashboard/productManagement/UserManagement';
import { EditProfile } from './dashboard/productManagement/EditProfile';
import AddProduct from './dashboard/productManagement/AddProduct';
import AllCatagories from './dashboard/productManagement/AllCatagories';
import AddCatagory from './dashboard/productManagement/AddCategory';
import EditCatagory from './dashboard/productManagement/EditCatagory';
import AddUser from './dashboard/productManagement/AddUser';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import ConfirmPassword from './pages/ConfirmPassword';
import ResetPassword from './pages/ResetPassword';
import ProductManagement from './dashboard/productManagement/ProductManagement';
import Actions from './dashboard/actions/Actions';
import AddAction from './dashboard/actions/AddAction';
import Sales from './dashboard/sales/Sales';
import SaleItem from './dashboard/sales/SaleItem';
import Insights from './dashboard/insights/Insights';
import Agenda from './dashboard/agenda/Agenda';
import AddAgenda from './dashboard/agenda/AddAgenda';
import EditProduct from './dashboard/productManagement/EditProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login/forgotpassword' element={<ForgotPassword />} />
        <Route path='/confirmpassword' element={<ConfirmPassword />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/productmanagement' element={<ProductManagement />} />
        <Route path='/dashboard/productmanagement/editproduct' element={<EditProduct />}/>
        <Route path='/dashboard/productmanagement/allcategories/editcategory' element={<EditCatagory />} />
        <Route path='/dashboard/usermanagement' element={<UserManagement />} />
        <Route path='/dashboard/allproducts/addproduct' element={<AddProduct />} />
        <Route path='/dashboard/allcatagories' element={<AllCatagories />} />
        <Route path='/dashboard/allcatagories/addcatagory' element={<AddCatagory />} />
        <Route path='/dashboard/allcatagories/editcatagory' element={<EditCatagory />} />
        <Route path='/dashboard/actions' element={<Actions />} />
        <Route path='/dashboard/actions/addaction' element={<AddAction />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/dashboard/usermanagement/adduser' element={<AddUser />} />
        <Route path='/dashboard/sales' element={<Sales />} />
        <Route path='/dashboard/sales/saleitem' element={<SaleItem />} />
        <Route path='/dashboard/insights' element={<Insights />} />
        <Route path='/dashboard/agenda' element={<Agenda />} />
        <Route path='/dashboard/agenda/addagenda' element={<AddAgenda />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

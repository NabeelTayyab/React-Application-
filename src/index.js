import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import CreateInvoice from './Components/CreateInvoice';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from'./Components/login';
// import SignUp from'./Components/signup';
// import Product from './Components/product';
// import ProductDesc from './Components/productdesc';
import Categories from './Components/categories';

ReactDOM.render(
  <React.StrictMode>
    {/* <CreateInvoice /> */}
{/* <Login/> */}
{/* <SignUp/> */}
{/* <Product/> */}
{/* <ProductDesc/> */}
<Categories/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

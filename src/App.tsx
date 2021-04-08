import React from 'react';
import './App.css';
import Products from "./management/Products";
import ProductsCreate from "./management/ProductsCreate";
import ProductsEdit from "./management/ProductsEdit";
import {BrowserRouter, Route} from "react-router-dom";
import Users from "./users/Users";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Route path='/' exact component={Users}/>
         <Route path='/management/products' exact component={Products}/>
         <Route path='/management/products/create' exact component={ProductsCreate}/>
         <Route path='/management/products/:id/edit' exact component={ProductsEdit}/>
       </BrowserRouter>
    </div>
  );
}

export default App;

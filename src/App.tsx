import React from 'react';
import './App.css';
import Products from "./management/Products";
import {BrowserRouter, Route} from "react-router-dom";
import Users from "./users/Users";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Route path='/' exact component={Users}/>
         <Route path='/management/products' exact component={Products}/>
         <Route path='/management/products/create' exact component={ProductsCreate}/>
       </BrowserRouter>
    </div>
  );
}

export default App;

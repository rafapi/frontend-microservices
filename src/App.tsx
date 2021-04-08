import React from 'react';
import './App.css';
import Products from "./management/Products";
import Users from "./users/Users";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

            <BrowserRouter>
              <Route path='/' exact component={Users}/>
              <Route path='/management/products' component={Products}/>
            </BrowserRouter>

    </div>
  );
}

export default App;

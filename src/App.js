import React from 'react';
import {Link, Route} from "react-router-dom" ;
import routesConfig from "./routesConfig";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
       <nav>
         <Link className= "px-1" to= "/">Home</Link>
         <Link to= "/user">User</Link>
         <Link to= "/login">Login</Link>
       </nav>
      </header>
      {routesConfig.map(
        (value, key) => {
          return <Route
              key={key} path={value.path} component={value.component} exact={value.exact}
          ></Route>
        }
      )}
    </div>
  );
}

export default App;

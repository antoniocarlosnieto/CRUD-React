import React from 'react';
import {Link, Route} from "react-router-dom" ;
import routesConfig from "./routesConfig";
import logo from './logo.svg';
import './App.css';
import Footer from "./pages/footer/footer";

function App() {
  return (
    <div className="App">
      <header className= "py-3 header">
       <nav className="nav-link">
         <Link className= "px-1" to= "/">Home</Link>
         <Link className="px-2" to= "/user">User</Link>
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
      <Footer></Footer>
    </div>
  );
}

export default App;

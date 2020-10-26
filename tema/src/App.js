import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard'
import Buttons from './Components/Buttons'
import Cards from './Components/Cards'
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
           <div id="content">
               <Navbar/>  
               <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/Buttons" component={Buttons}/>
                    <Route exact path="/Cards" component={Cards}/>

                </Switch>
           </div>
           <Footer/>
      </div>
    </div>
  );
}

export default App;

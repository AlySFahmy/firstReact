import { Component } from "react";
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import {Outlet } from 'react-router-dom';



export default class App extends Component {
  
  render() {
    
    return <>
    <NavBar/>
    <div className='homemargin'></div>
    <Outlet/>
    <Footer/>
    </>
  }
}

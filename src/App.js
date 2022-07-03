import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/home/Home'
import NavBar from './components/navbar/NavBar'
import CreateUser from './components/createUser/CreateUser'
import AllUsers from './components/allUsers/AllUsers'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/createUser" element={<CreateUser />} />
      <Route path="/allUsers" element={<AllUsers />} />
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  )
}

export default App
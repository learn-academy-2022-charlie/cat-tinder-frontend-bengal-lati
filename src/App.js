import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import CarIndex from './pages/CarIndex';
import CarShow from './pages/CarShow';
import CarNew from './pages/CarNew';
import CarEdit from './pages/CarEdit';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';


function App() {

  let [hasError, setErrors] = useState(false)
  let [cars, setCars] = useState([])
  
  

  async function readCar () {
    const response = await fetch("http://localhost:3000/cars");
    response
      .json()
      .then(response => setCars(response))
      .catch(err => {
        setErrors(err)
        console.log(hasError)
      })
  }

  function createCar (newCar) {
   fetch("http://localhost:3000/cars",
      {
        body: JSON.stringify(newCar),
        headers: {"Content-Type":"application/json"},
        method: "POST",
        
      }
    )
    .then(response => response.json())
    .then(payload => setCars(readCar()))
    .catch(err => {
      setErrors(err)
      console.log(hasError)
    })
    alert("New car added")
    
  }

function deleteCar(id) {
  fetch(`http://localhost:3000/cars/${id}`, {
    method: "DELETE"
  }).then( result => {
    result.json().then( response => {
      console.warn(response)
    })
  })
  
}


  useEffect(()=>{
    readCar();
  },[])
  
  return (
    <Router forceRefresh={true}>
      <Header/>
      <h1>Welcome To Cinder</h1>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/carindex" element={<CarIndex cars={cars}/> }/>
        <Route path="/carshow/:id" element={<CarShow cars={cars} deleteCar={deleteCar} readCar={readCar}/>} />                  
        <Route path="/carnew" element={<CarNew cars={cars} newCar={createCar} readCar={readCar}/>} />
        <Route path="/caredit" element={CarEdit} />
        <Route element={NotFound}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

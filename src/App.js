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
import 'bootstrap/dist/css/bootstrap.min.css';


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

  function editCar (editCar, id) {
    fetch(`http://localhost:3000/cars/${id}`,
       {
         body: JSON.stringify(editCar),
         headers: {
              Accept: "application/json",
              "Content-Type":"application/json"},
         method: "PATCH",      
       }
     )
     .then(response => response.json())
     .then(payload => setCars(readCar()))
     .catch(err => {
       setErrors(err)
       console.log(hasError)
     })
     
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
        <div className="app-container">
          
            <Routes>
              <Route path="/" element={<Home cars={cars}/>} />
              <Route path="/carindex" element={<CarIndex cars={cars}/> }/>
              <Route path="/carshow/:id" element={<CarShow cars={cars} deleteCar={deleteCar} readCar={readCar}/>} />                  
              <Route path="/carnew" element={<CarNew cars={cars} newCar={createCar} readCar={readCar}/>} />
              <Route path="/caredit/:id" element={<CarEdit cars={cars} editCar={editCar} readCar={readCar}/>} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          
        <Footer/>
        </div>
      </Router>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
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
      .catch(err => setErrors(err))
  }


  useEffect(()=>{
    readCar();
  })

  return (
    <Router>
      <Header/>
      <h1>This is App.js</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/carindex">
          <CarIndex cars={cars}></CarIndex>
        </Route>
        <Route path="/carshow/:id" render={(props)=> {
          let id = props.match.params.id
          let car = cars.find((carObject) => carObject.id.toString() === id)
          return <CarShow car={car}/>
        }}/>
                  
        <Route path="/carnew">
            <CarNew cars={cars}/>
        </Route>
        <Route path="/caredit" component={CarEdit} />
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import CarIndex from './pages/CarIndex';
import CarShow from './pages/CarShow';
import CarNew from './pages/CarNew';
import CarEdit from './pages/CarEdit';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import mockCars from './mockCars.js';




function App() {
  const [cars] = useState(mockCars);
  
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
                  
        <Route path="/carnew" component={CarNew} />
        <Route path="/caredit" component={CarEdit} />
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Route,Switch, useParams } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import CatIndex from './pages/CatIndex';
import CatShow from './pages/CatShow';
import CatNew from './pages/CatNew';
import CatEdit from './pages/CatEdit';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import mockCats from './mockCats.js';




function App() {
  const [cats, setCats] = useState(mockCats);
  
  return (
    <Router>
      <Header/>
      <h1>This is App.js</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catindex">
          <CatIndex cats={cats}></CatIndex>
        </Route>
        <Route path="/catshow/:id">
          <CatShow cats={cats}/>
        </Route>          
        <Route path="/catnew" component={CatNew} />
        <Route path="/catedit" component={CatEdit} />
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

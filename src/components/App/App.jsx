// import * as React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import Favorites from "../Favorites/Favorites";
import NavBar from "../NavBar/Navbar";
import Button from '@mui/material/Button';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  

  return (
    <div>
      <Router>
        
        <header>
       <h1>Giphy Search!</h1>
      </header>
      <NavBar />
      
     <Route exact path='/'>
      <SearchBar />
      </Route>

      <Route exact path='/favorites'>
      <Favorites />
      </Route>

      </Router>
    </div>

  );
}


export default App;

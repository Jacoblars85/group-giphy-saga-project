import SearchBar from "../SearchBar/SearchBar";
import Favorites from "../Favorites/Favorites";
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <header>
       <h1>Giphy Search!</h1>
      </header>
      <Link to='/'>
      <button>Search</button>
      </Link>
      <Link to='/favorites'>
      <button>Favorites</button>
      </Link>
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

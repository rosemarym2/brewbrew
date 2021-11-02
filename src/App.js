import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MoreInfo from './components/MoreInfo';
import Ingredients from './components/Ingredients';

const App = () => {
  const [data, setData] = useState([])
  const getter = async () => {
    const res = await fetch('https://api.punkapi.com/v2/beers/random')
    const newData = await res.json()
    setData(newData)
  }
  useEffect(() => {
    getter()
  }, [])

  return (
    <Router>
    <div>
      <h1>brew brew</h1>
    </div>
    <Switch>
      <Route path="/moreinfo">
        <MoreInfo />
      </Route>
      <Route path="/ingredients">
        <Ingredients />
      </Route>
    </Switch>
    <nav>
      <ul>
        <li>
          <Link to="/moreinfo">
            more
          </Link>
        </li>
        <li>
          <Link to="/ingredients">
            ingredients
          </Link>
        </li>
      </ul>
    </nav>
    
    </Router>
  )
}

export default App;

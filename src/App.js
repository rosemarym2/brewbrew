import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Ingredients from './components/Ingredients/Ingredients';

const App = () => {
  const [data, setData] = useState([])
  const getter = async () => {
    const res = await fetch('https://api.punkapi.com/v2/beers/random')
    const newData = await res.json()
    setData(newData[0])
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
        <MoreInfo tips={data.brewers_tips} pairing={data.food_pairing}/>
      </Route>
      <Route path="/ingredients">
        <Ingredients ingredients={data.ingredients}/>
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

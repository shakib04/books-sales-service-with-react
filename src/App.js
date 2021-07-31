import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Card } from './components/practice/Card';
import Score from "./components/practice/Score";
import Movie from "./components/practice/Movie";
import CondionalRendering from "./components/practice/main";
import Index from './components/Form/index'
import Form2 from './components/Form/Form2'
import ContactApi from './components/practice/ContactApi'
import UserAddress from './components/laravel_project/UserAddress'
import NewAddress from './components/laravel_project/NewAddress'
import './App.css';
import data from './data.json';

var cardId = 1;

let all_cards = data.map((element, index) => <Card key={index} id={cardId++} title={element.title} shortDesc={element.shortDesc} fullDesc={element.fullDesc} />)

function App() {
  return (
    <div>
      {/* <Form2 /> */}
      <Router>
        <Switch>
          <Route exact path="/CreateAddress" component={NewAddress}></Route>
          <Route exact path="/user/address/list" component={UserAddress}></Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
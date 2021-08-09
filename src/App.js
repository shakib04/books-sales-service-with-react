import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import { Card } from './components/practice/Card';
import AddUser from './components/User/AddUser'
import ContactApi from './components/practice/ContactApi'
import Address from "./components/laravel_project/Address/Address";
import Profile from "./components/laravel_project/UserProfile/Profile";

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

          {/* <Route exact path="/user/address" children={<Address />}></Route> */}

          {/* <Route path="/profile" children={<Profile />}></Route>

          <Route path="/address" children={<Address />}></Route> */ }



          <Route exact path="/user/list" component={ContactApi}></Route>
          <Route exact path="/user/add" component={AddUser}></Route>
        </Switch>

        <Profile />
        <Address />

      </Router>


    </div>

  );
}

export default App;
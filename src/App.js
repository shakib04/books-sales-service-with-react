import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import { Card } from './components/practice/Card';
import AddUser from './components/User/AddUser'
import ContactApi from './components/practice/ContactApi'
import Address from "./components/laravel_project/Address/Address";
import Profile from "./components/laravel_project/UserProfile/Profile";
import Books from "./components/laravel_project/Books/Books";
import Cart from "./components/laravel_project/Cart/Cart";
import BookWish from "./components/laravel_project/UserWish/WishBook";
import Order from "./components/laravel_project/Order/Order";
import Login from "./components/laravel_project/Login/Login"
import Logout from "./components/laravel_project/Common_Compo/Logout";
import NavBar from "./components/laravel_project/Common_Compo/NavBar";

import './App.css';
import data from './data.json';
import { useState, useEffect } from "react";

var cardId = 1;


let all_cards = data.map((element, index) => <Card key={index} id={cardId++} title={element.title} shortDesc={element.shortDesc} fullDesc={element.fullDesc} />)

function App() {

  const [logged, setLogged] = useState()

  useEffect(() => {
    if (localStorage.getItem("userid")) {
      setLogged(true)
    } else {
      setLogged(false)
    }

  }, [])

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
          <Route exact path="/logout" children={<Logout />}></Route>
        </Switch>

        <Books />
        <Profile />
        <Address />
        <Cart />
        <BookWish />
        <Order />
        <Login />

      </Router>


    </div>

  );
}

export default App;
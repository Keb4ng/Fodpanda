import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import FoodDetails from "./components/FoodDetails";
import Homepage from "./Pages/Homepage";
import Partners from "./Pages/Partners";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Toppicks from "./Pages/TopPicksPage";
import SelectRestaurantsPages from "./Pages/SelectRestaurantsPage";
import RestaurantDetails from "./components/RestaurantDetails";
import { ShopContextProvider } from "./context/ShopContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <ShopContextProvider>
        <Router>
          <div className="App">
            <Navbar />
            <div className="content relative">
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact={true} path="/select/:name">
                  <RestaurantDetails />
                </Route>
                <Route path="/select">
                  <SelectRestaurantsPages />
                </Route>
                <Route exact={true} path="/toppicks/:id/:name">
                  <FoodDetails />
                </Route>
                <Route path="/toppicks">
                  <Toppicks />
                </Route>
                <Route path="/partners">
                  <Partners />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
              </Switch>
              <ShoppingCart />
            </div>
            <Footer />
          </div>
        </Router>
      </ShopContextProvider>
    </UserProvider>
  );
}

export default App;

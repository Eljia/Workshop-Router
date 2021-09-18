import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import { Link } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductInfo from "./components/ProductInfo";
function App() {
  const products = [
    {
      id: 0,
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
      name: "AirPods",
      price: `6,99 $`,
    },
    {
      id: 1,
      imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
      name: "Smart watch",
      price: `8,64 $`,
    },
    {
      id: 2,
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
      name: "Iphone 11 ",
      price: `150 $`,
    },
  ];
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/product">
          <ProductList list={products} />
        </Route>
        <Route
          exact
          path="/details/:id"
          render={(props) => <ProductInfo list={products} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;

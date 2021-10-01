import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Notfound from './components/Notfound/Notfound';
import Food from './components/Food/Food';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
        <Switch>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/result/:idmeald">
            <Food></Food>
          </Route>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
          <Route  path="/">
            <Home></Home>
          </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;

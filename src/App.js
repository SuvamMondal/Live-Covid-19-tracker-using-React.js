import Covid from "./components/totalCases/covid19.js";
import Navbar from "./components/Navbar";
import StateWise from './components/totalCases/stateWise.js'
import About from "./components/about.js";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const App  = () => {
  return (
    <BrowserRouter>
      <div className="app">
      <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Covid/>
          </Route>
          <Route path='/statewise'>
            <StateWise/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
 
export default App;
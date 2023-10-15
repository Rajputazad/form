import logo from './logo.svg';
import './App.css';
import Form from "./form.js"
import {BrowserRouter as Router,Routes ,Route,} from "react-router-dom";
import Data from "./datashow.js";
function App() {
  return (
   
      <Router>
      <Routes>
{/* <Switch> */}

      <Route path='/' exact element={<Form/>}/>
      <Route exact path='/data' element={<Data/>} />
{/* </Switch>e */}
      </Routes>
      </Router>

   
  );
}

export default App;

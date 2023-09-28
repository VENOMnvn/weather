import Navbar from './components/navbar';
import './App.css';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import HomeScreenLocation from './components/HomeScreenLocation';
import { useState } from 'react';


function App() {
  const [isMetric,setMetric] = useState(true);
  const changeMetric = (value)=>{
    console.log("Stage-2");
    setMetric(value);
  }

  return (
    <BrowserRouter>
    <div className="App">
    <Navbar changeMetric={changeMetric}></Navbar>
    <Routes>
      <Route path='/' element={<HomeScreen units={isMetric}></HomeScreen>}></Route>
      <Route path='/location' element={<HomeScreenLocation units={isMetric}></HomeScreenLocation>}></Route>
      <Route path='/:error' element={<div style={{margin:"100px auto",fontSize:"3rem",width:"100vw"}}>404 Page Not Found</div>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;

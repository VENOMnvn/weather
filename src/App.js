import Navbar from './components/navbar';
import './App.css';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import HomeScreenLocation from './components/HomeScreenLocation';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
      <Route path='/location' element={<HomeScreenLocation></HomeScreenLocation>}></Route>
      <Route path='/:error' element={<div style={{margin:"100px auto",fontSize:"3rem",width:"100vw"}}>404 Page Not Found</div>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;

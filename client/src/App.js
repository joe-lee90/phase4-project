import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <h1>Sojourn 🏡 </h1>
      <NavBar /> 
      <Routes >
        <Route path='/' exact element={<HomePage/>}/>
       

      </Routes>

    </div>
  );
}

export default App;

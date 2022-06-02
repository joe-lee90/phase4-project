import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import AddListingPage from './pages/AddListingPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <div className="App">
      <h1>Sojourn 🏡 </h1>
      <NavBar /> 
      <Routes >
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/add-listing' exact element={<AddListingPage/>}/>
        <Route path='/user-profile' exact element={<UserProfilePage/>}/>
      </Routes>

    </div>
  );
}

export default App;

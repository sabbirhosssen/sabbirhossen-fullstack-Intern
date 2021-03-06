import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Coummunity from './Components/Pages/Community/Coummunity';
import Details from './Components/Pages/Details/Details';
import Home from './Components/Pages/Home';
import Introduction from './Components/Pages/Introduction/Introduction';
import Learn from './Components/Pages/Learn/Learn';
import Wallet from './Components/Pages/Wallet/Wallet';
function App() {
  return (
    <div className="App pt-5">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/intro" element={<Introduction />} />
        <Route path="/buy" element={<Wallet />} />
        <Route path="/details" element={<Details />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/community" element={<Coummunity />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<Admin/>}/>
      </Routes> 
    <Footer/>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Introduction from './Components/Pages/Introduction/Introduction';
function App() {
  return (
    <div className="App pt-5">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/" element={<Introduction />} />
      </Routes> 
    <Footer/>
    </div>
  );
}

export default App;

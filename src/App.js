import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Coummunity from './Components/Pages/Community/Coummunity';
import Introduction from './Components/Pages/Introduction/Introduction';
import Learn from './Components/Pages/Learn/Learn';
import Timer from './Components/Pages/Timer/Timer';
function App() {
  return (
    <div className="App pt-5">
      <Header/>
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
        <Route path="intro" element={<Introduction />} />
      </Routes>
   <Coummunity/>
   <Learn/>
      <Timer/>
    <Footer/>
    </div>
  );
}

export default App;

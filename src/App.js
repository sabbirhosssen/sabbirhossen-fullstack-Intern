import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Learn from './Components/Pages/Learn/Learn';
import Timer from './Components/Pages/Timer/Timer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Learn/>
      <Timer/>
    <Footer/>
    </div>
  );
}

export default App;

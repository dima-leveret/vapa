import './App.css';
import NavBar from "./components/navigation/NavBar";
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <NavBar>
        <Home/>
      </NavBar>
      <Footer/>
    </>
  );
}

export default App;

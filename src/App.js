import './App.css';
import NavBar from "./components/navigation/NavBar";
import Partners from "./components/partners/Partners";
import ProductCard from './components/products/ProductCard';

function App() {
  return (
    <>
      <NavBar>
        <ProductCard/>
        
      </NavBar>
      <Partners/>
      
    </>
  );
}

export default App;

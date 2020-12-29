import './App.css';
import NavBar from "./components/navigation/NavBar";
import NavBody from './components/navigation/NavProducts';
import Partners from "./components/partners/Partners";
import ProductCard from './components/products/ProductCard'

function App() {
  return (
    <>
      <NavBar/>
      <NavBody/>
      <ProductCard/>
      <Partners/>
    </>
  );
}

export default App;

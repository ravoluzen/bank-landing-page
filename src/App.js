import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import CurrencyConverter from './components/currency-converter/CurrencyConverter';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App h-auto">
      <Navbar></Navbar>
      <Home/>
      <About/>
      <Blogs/>
      <CurrencyConverter/>
      <Contact/>
    </div>
  );
}

export default App;

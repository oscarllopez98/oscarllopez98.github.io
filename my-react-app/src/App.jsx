import './App.css'

import Home from './components/Home'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";


function App() {

  return (
    <>
      <Home/>
      <About/>
      <Portfolio/>
      <Resume/>
    </>
  );
}

export default App

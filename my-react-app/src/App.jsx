import './App.css'

import Home from './components/Home'
import About from './components/About';
import Portfolio from './components/Portfolio';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {

  return (
    <>
      <Home/>
      <About/>
      <Portfolio/>
      <section id='resume'>RESUME</section>
      <section id='hobbies-and-interests'>HOBBIES AND INTERESTS</section>
    </>
  );
}

export default App

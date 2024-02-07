import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';

function App() {

  return (
    <>
      <Home/>
      <About/>
      <section id='portfolio'>PORTFOLIO</section>
      <section id='resume'>RESUME</section>
      <section id='hobbies-and-interests'>HOBBIES AND INTERESTS</section>
    </>
  );
}

export default App

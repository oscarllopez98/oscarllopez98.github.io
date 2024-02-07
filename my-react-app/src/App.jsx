import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <section id='about'>ABOUT</section>
      <section id='portfolio'>PORTFOLIO</section>
      <section id='resume'>RESUME</section>
      <section id='hobbies-and-interests'>HOBBIES AND INTERESTS</section>
    </>
  );
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'
import About from './components/About';
import Portfolio from './components/Portfolio';

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

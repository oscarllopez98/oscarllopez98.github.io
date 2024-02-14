import '/src/App.css'

import Home from '/src/components/Home'
import About from '/src/components/About';
import Portfolio from '/src/components/Portfolio';
import Resume from '/src/components/Resume';

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

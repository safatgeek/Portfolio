import './App.css';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/services/Services';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      
    </div>
  );
}

export default App;

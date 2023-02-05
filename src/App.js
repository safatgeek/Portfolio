import './App.css';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
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
      
    </div>
  );
}

export default App;

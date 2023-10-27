//--- imports! ---
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';

function App() {
  return (
    <div className="App">
      {/* Display header below*/}
      <Header />

      <h2>Currently under construction</h2>
      <p>Will be back momentarily!</p>
      
    {/* Display 'About' component below */}
      <Intro/>
      <About />

    </div>
  );
}

export default App;

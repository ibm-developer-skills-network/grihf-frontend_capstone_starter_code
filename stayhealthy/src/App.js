import './style.css';
import Header from './components/Header/Header';
import Hero from './sections/Hero/Hero';
import Appointments from './sections/Appointments/Appointments';
import Reviews from './sections/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Appointments />
      <Reviews />
    </div>
  );
}

export default App;

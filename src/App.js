import './App.css'; // App || body style.
import './styles/style.css'; //Calculator style.
import ButtonsEffect from './components/framer-motion';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">

        <div className='calculator-body'>
        <ButtonsEffect />
        </div>
        
        <Footer />
    </div>
  );
}

export default App;

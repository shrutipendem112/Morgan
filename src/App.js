import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarCom from './components/NavbarCom'
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarCom/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

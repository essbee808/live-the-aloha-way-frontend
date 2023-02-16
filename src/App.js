import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;

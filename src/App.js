import logo from './media/RESTAURANTE-MEDIEVAL-exterior.jpg';
import './App.css';
import NavBar from './compentes/NavBar/NavBar';


function App() {

  const stylesH1 = {
    color:"red",
    
    }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1 style={stylesH1}>
          Restaurante El Medieval
        </h1>
        <img alt='logo' src={logo}></img>
        <p>
          Bienvenido a mi App
        </p>
      </header>
    </div>
  );
}

export default App;

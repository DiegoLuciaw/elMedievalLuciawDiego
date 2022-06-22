import logo from './media/RESTAURANTE-MEDIEVAL-exterior.jpg';
import './App.css';
import NavBar from './compentes/NavBar/NavBar';
import ItemDetailContainer from "./compentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from './compentes/ItemsListContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  const stylesH1 = {
    color:"red",
    
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={stylesH1}>
          Restaurante El Medieval
        </h1>
        <img alt='logo' src={logo}></img>

        <BrowserRouter>

          <NavBar/>

          <Routes>

            <Route path="/" element={<ItemListContainer greeting="Menu"/>} />
            
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categorias"/>}/>
            
            <Route path="/item/:id" element={<ItemDetailContainer greeting="Detalles del Plato"/>} />

          </Routes>

        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;

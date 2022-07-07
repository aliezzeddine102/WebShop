

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import ListaProdutos from './pages/ListaProdutos'
import Sobre from './pages/Sobre'
import Navbar from './components/Navbar'
import Anuncio from './components/Anuncio'
import Footer from './components/Footer'
import Contacto from './pages/Contacto'









function App() {
  return (
    <Router>
      <Anuncio/>
       <Navbar/>
    <Switch>
      <Route exact path='/'><Home/></Route>
      <Route exact path='/sobre'><Sobre/></Route>
      <Route exact path='/produto'><ListaProdutos/></Route>
      <Route exact path='/contacto'><Contacto/></Route>
      <Route exact path='/cadastrar'>Cadastrar</Route>
    </Switch>
     <Footer/>
    </Router>
  );
}

export default App;

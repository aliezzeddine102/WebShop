
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Comprar from './components/pages/Comprar'
import Contacto from './components/pages/Contacto'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro';

function App() {
  return (
   
      <Router>
        <Navbar/>
       <Switch>
         <Route exact path='/'><Home/></Route>
         <Route exact path='/sobre'><Sobre/></Route>
         <Route exact path='/comprar'><Comprar/></Route>
         <Route exact path='/contacto'><Contacto/></Route>
         <Route exact path='/login'><Login/></Route>
         <Route exact path='/cadastro'><Cadastro/></Route>
       </Switch>
        <Footer/>
      </Router>
    
  );
}

export default App;

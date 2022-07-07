import React from 'react';
import {Link} from 'react-router-dom'
import style from './Navbar.module.css'



function Navbar() {
  return (
      
      <div className='container p-2'>
      <nav className={style.navbar}>
          <h3>logo</h3>
          <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/sobre'>Sobre</Link></li>
              <li><Link to='/comprar'>Comprar</Link></li>
              <li><Link to='/contacto'>Contacto</Link></li>
              <li><Link to='/login'>Login</Link></li>
          </ul>

      </nav>
      </div>
     
     
  );
}

export default Navbar;
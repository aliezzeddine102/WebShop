import React from 'react';
import  './Footer.module.css'
import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import style from './Footer.module.css'

function Footer() {
  return (
      <footer className=' bg-dark text-white pt-5'>
         <div className='container text-md-left'>
             <div className='row text-center text-md-left'>
                 <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                     <h5 className='text-uppercase mb-4 font-weight-bold '>Webshop</h5>
                        <p><Link to='/' className='text-decoration-none text-white'>Home</Link></p>
                        <p><Link to='/sobre' className='text-decoration-none text-white'>Sobre</Link></p>
                        <p><Link to='/comprar' className='text-decoration-none text-white'>Comprar</Link></p>
                        <p><Link to='/contacto' className='text-decoration-none text-white'>Contacto</Link></p>
                 </div>
                 <div className='col-md-2 col-lg-2 col-xl-3 mx-auto mt-3'>
                     <h5 className='text-uppercase mb-4 font-weight-bold '>Products</h5>
                     <p>Home</p>
                     <p>Sobre</p>
                     <p>Contacto</p>
                     <p>Comprar</p>
                     

                 </div>
                 <div className='col-md-3 col-lg-2 col-xl-3 mx-auto mt-3'>
                     <h5 className='text-uppercase mb-4 font-weight-bold '>Use Links</h5>
                     <p>Home</p>
                     <p>Sobre</p>
                     <p>Contacto</p>
                     <p>Comprar</p>
                     

                 </div>
                 <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                     <h5 className='text-uppercase mb-4 font-weight-bold '>Contact</h5>
                     <p>Home</p>
                     <p>Sobre</p>
                     <p>Contacto</p>
                     <p>Comprar</p>
                     

                    </div>

                    <hr className='mb-4'/>
                    <div className='row '>
                        <div className='col-md-4'>
                            <h2>Logo</h2>
                        </div>
                        <div className='col-md-4'>
                            <ul className={style.list}>
                                 <li><FaFacebook/></li>
                                <li><FaInstagram/></li>
                                <li><FaLinkedin/></li>
                                <li><FaWhatsapp/></li>
                            </ul>
                        </div>

                    </div>

             </div>

         </div>
      </footer>
  )
}

export default Footer;
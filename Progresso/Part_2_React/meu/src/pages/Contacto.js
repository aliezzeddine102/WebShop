import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaMobileAlt, FaWhatsapp} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

import style from './Contacto.module.css'


function Contacto() {
  return (
    <section>
      <div className='container'>
        <h1 className='mt-5 text-center text-secondary pt-4'>Entre em Contacto</h1>
        <div className='row justify-content-evenly mt-5'>
          <div className='col-md-4'>
          <div className='col shadow p-3 mb-5 bg-body roudend text-center'>
          <h3 className='text-secondary'>LOCALIZAÇÃO</h3>
            <p>Endereço de Contacto
              Rua dos Generais, Condomínio 
              das Mangueirinhas
              Morro Bento | Luanda | Angola
              
          </p>
          <p className='fw-bold' >Somos sociais</p>
              <ul className={style.list}><li><FaFacebook/></li>
              <li><FaInstagram/></li>
              <li><FaLinkedin/></li>
              <li><FaWhatsapp/></li>
              </ul>
              

          </div>

          <div  className='col shadow p-3 mb-5 bg-body roudend text-center'>
            <p>Ligue para nós hoje!</p>
              <p><FaPhone/>( +244) 222 679 500</p>
              <p><FaMobileAlt/>(+244) 946 990 459</p>
              <p><MdEmail/>DEV@COMPUTERCITY.CO.AO</p>

          </div>

          </div>
          <div className='col-md-4 shadow p-3 mb-5 bg-body rounded '>
            <h3 className='text-center text-secondary'>Envie-nos uma mensagem</h3>
            <div class="mb-3">
              <label for="Nome" class="form-label">Nome</label>
              <input type="text" class="form-control w-100"  placeholder="Seu Nome"/>
          </div>
            <div class="mb-3">
              <label for="Email" class="form-label">Email</label>
              <input type="email" class="form-control w-100"  placeholder="Seu email"/>
          </div>
            <div class="mb-3">
              <label for="Mensagem" class="form-label">Sua mensagem</label>
              <textarea class="form-control w-100" id="exampleFormControlTextarea1" rows="3" placeholder="Mensagem"></textarea>
            </div>
            <button type="button" class="btn btn-danger w-100">Enviar mensagem</button>


          </div>

        </div>

      </div>
    </section>
  );
}

export default Contacto;
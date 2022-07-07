import React from 'react';
import img from '../images/sobre.jpg'
import {AiFillEye} from 'react-icons/ai'
import { FaStar, FaBullseye } from 'react-icons/fa';
import style from './Sobre.module.css'




function Sobre() {
  return (
    <div className='container'>
      <div className='row justify-content-evenly mt-5'>
        <div className='col-md-5'>
          <h1 className='text-center text-secondary mt-4'>Sobre</h1>
          <p className='mt-4'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>
        <div className='col-md-5 mt-4'>
          <img src={img} alt=' '  className='img-fluid mb-3'></img>
          
          
        </div>

      </div>

      <div className='row justify-content-evenly bg-light mb-4 p-5'>
        <div className='col-md-4'>
          <div class="card " >
            <p className={style.icon}><AiFillEye/></p>
             <div class="card-body">
              <h5 class="card-title text-center">Missão</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            </div>
          </div>
        </div>
        <div className='col-md-4'>
            <div class="card " >
              <p className={style.icon}><FaBullseye/></p>
             <div class="card-body">
              <h5 class="card-title text-center">Visão</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          
         </div>
          <div className='col-md-4'>
          <div class="card text-center" >
             <div class="card-body">
               <p className={style.icon}><FaStar/></p>
              <h5 class="card-title">Valores</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            </div>
          </div>
            
          </div>

      </div>

    </div>
  );
}

export default Sobre;
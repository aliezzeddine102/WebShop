import React from 'react';



function Cadastro() {
  return (
    <section>
        <div className='container'>
                <h1 className='text-center text-secondary pt-5 pb-3'>Cadastro do usuário</h1>

                <div className='row justify-content-evenly pt-3'>
                    <div className='col-md-6 '>
                      
                        <input type='text' className='form-control' placeholder='Nome Completo'/>
                        <div className='row pt-3'>
                            <div className='col-md-6 pb-2'>
                                
                                <input type='email' className='form-control' placeholder='Seu email'/>
                            </div>
                            
                            <div className='col-md-6 pb-2'>
                               
                                <input type='text' className='form-control ' placeholder='Seu Endereço'/>
                            </div>
                        </div>
                        <div className='row justify-content-evenly '>
                            <div className='col-md-6 pb-2'>
                                
                                <input type='password' className='form-control ' placeholder='sua password'/>
                            </div>
                            <div className='col-md-6'>
                                
                                <input type='tel' className='form-control ' placeholder='seu telefone'/>
                            </div>
                            <button type="button" class="btn btn-danger w-50 mb-5 mt-2">Cadastrar</button>


                        </div>

                    </div> 

                </div>
        </div>

    </section>
  );
}

export default Cadastro;
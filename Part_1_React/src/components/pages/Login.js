import React from 'react';
import { Link } from 'react-router-dom';




function Login() {
  return (
    <section>
    <div className='container'>
      <div className='row  justify-content-evenly m-4     '>
          <div className='col-md-4 shadow p-3 mb-5 bg-body rounded p-5 mt-5 '>
            <h3 className='text-secondary'>Entrar</h3>
            <form>
            <div className="mb-3">
              <input type="text" className="form-control  rounded-pill" placeholder="e-mail ou telefone"/>
           </div>
           <div className="mb-3">
            <input type="password" className="form-control rounded-pill"  placeholder="password"/>
            <Link className='text-decoration-none pt-1'>Esqueci a senha?</Link>
           </div>
           <hr></hr>
           
           <button type="button" className="btn btn-danger w-100 pt-2 rounded-pill">entrar</button>
           </form>
            
           
        </div>
             <p className='text-center'> és novo?   <Link to='/cadastro' > Cadastra-se aqui</Link></p>
        

      </div>
    </div>
    </section>

  )
  
}

export default Login;
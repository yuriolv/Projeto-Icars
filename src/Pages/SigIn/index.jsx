import './style.css'
import { LogSig } from '../../Components/page-logSig'
import Eye from '../../Images/eye-pass.svg'
import { useState } from 'react';
import { CreatUser } from '../../API/API.js';

export function SigIn () {
  const [data, setData] = useState({name:'', email: '', password: ''})
  const onChange = (e) => {
    console.log(e.target.name, e.target.value)
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  };
  async function submitForm (e) {
    try {
          e.preventDefault()
          const response = await CreatUser(data).catch(error => { throw new Error(error) })
          alert('Usuário Cadastrado com sucesso!')
          console.log(response)
    } catch (error) {
      alert(error)
    }

  }
    return (
      <div className="page">
        <LogSig />
        <form className="forms" id="form_principal" onSubmit={submitForm}  >
          <h1>Registre sua conta</h1>
          <div id="form1">
            <label htmlFor="nome">Nome</label> <br />
            <input
            onChange={onChange}
            value= {data.name}
              type="text"
              name="name"
              id="nome"
              placeholder="digite seu nome"
              form="form_principal"
            />
          </div>
          <div id="form2">
            <label htmlFor="email">E-mail</label> <br />
            <input
            onChange={onChange}
            value= {data.email}
              type="email"
              name="email"
              id="email"
              placeholder="digite seu e-mail"
              form="form_principal"
            />
          </div>
          <div id="form3">
            <label htmlFor="senha">Senha</label> <br />
            <input
            onChange={onChange}
            value= {data.password}
              type="password"
              name="password"
              id="senha"
              placeholder="digite sua senha"
              pattern="[0-9a-zA-Z]{8,10}"
              title="Mínimo: 8 Máximo: 10 (Apenas letras e números) "
              maxLength={10}
              form="form_principal"
            />
            <img src={Eye} alt="img do olho" id="img" 
            onMouseDown={() => {
              const senha = document.getElementById("senha");
              senha.type = 'text'
            }}
            onMouseUp={() => {
              const senha = document.getElementById("senha");
              senha.type = 'password'
            }}
            />
          </div>
          <button type="submit">
            Registrar-se
          </button>
          <div id="text2">
            Já possui uma conta? 
            <a href="/Login">
              <span> Entrar</span>
            </a>
          </div>
        </form>
      </div>
    );
}
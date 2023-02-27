import './style.css'
import { LogSig } from '../../Components/page-logSig'
import Eye from '../../Images/eye-pass.svg'

export function SigIn () {
    return (
      <div className="page">
        <LogSig />
        <form className="forms" id="form_principal">
          <h1>Registre sua conta</h1>
          <div id="form1">
            <label htmlFor="nome">Nome</label> <br />
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="digite seu nome"
              form="form_principal"
            />
          </div>
          <div id="form2">
            <label htmlFor="email">E-mail</label> <br />
            <input
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
              type="password"
              name="senha"
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
          <button type="submit" form="form_principal">
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
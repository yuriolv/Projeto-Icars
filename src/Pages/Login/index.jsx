import { LogSig } from "../../Components/page-logSig";
import "./style.css"
import Eye from "../../Images/eye-pass.svg"

export function Login () {

    return (
      <div className="page">
        <LogSig />
        <form className="forms" id="form_principal">
          <h1>Acesse sua conta</h1>
          <div id="form1">
            <label htmlFor="email">E-mail</label> <br />
            <input
              type="email"
              name="email-area"
              id="email"
              placeholder="digite seu e-mail"
              form="form_principal"
            />
          </div>
          <div id="form2">
            <label htmlFor="senha">Senha</label> <br />
            <input
              type="password"
              name="senha-area"
              id="senha"
              placeholder="digite sua senha"
              pattern="[0-9a-zA-Z]{8,10}"
              title="Mínimo: 8 Máximo: 10 (Apenas letras e números) "
              maxLength={10}
              form="form_principal"
            />
            <img
              src={Eye}
              alt="img do olho"
              id="img"
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
          <div id="text1">
            {" "}
            <a href="">Esqueceu sua senha?</a>
          </div>
          <button type="submit" form="form_principal">
            Entrar
          </button>
          <div id="text2">
            Não possui uma conta?{" "}
            <a href="/SigIn">
              <span>Registre-se</span>
            </a>
          </div>
        </form>
      </div>
    );
}
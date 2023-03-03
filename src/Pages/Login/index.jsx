import { LogSig } from "../../Components/page-logSig";
import "./style.css"
import Eye from "../../Images/eye-pass.svg"
import { useState } from "react";
import { userLogin } from "../../API/API";
import { useNavigate } from "react-router-dom";

export function Login () {
  const [data, setData] = useState({ email:'', password: '' })
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate()
  async function submitForm (e) {
    try {
          e.preventDefault() 
          const response = await userLogin(data).catch(error => { throw new Error(error) })
          console.log(response)
          navigate('/Cars')
          /* localStorage.setItem("token", response.data.token)
          localStorage.setItem("id", response.data.id) */
    } catch (error) {
      alert(error)
    }
  }
    return (
      <div className="page">
        <LogSig />
        <form className="forms" id="form_principal" onSubmit={submitForm}>
          <h1>Acesse sua conta</h1>
          <div id="form1">
            <label htmlFor="email">E-mail</label> <br />
            <input
            onChange={onChange}
              type="email"
              name="email"
              id="email"
              placeholder="digite seu e-mail"
              form="form_principal"
              value={data.email}
            />
          </div>
          <div id="form2">
            <label htmlFor="senha">Senha</label> <br />
            <input
            onChange={onChange}
              type="password"
              name="password"
              id="senha"
              placeholder="digite sua senha"
              pattern="[0-9a-zA-Z]{8,10}"
              title="Mínimo: 8 Máximo: 10 (Apenas letras e números) "
              maxLength={10}
              form="form_principal"
              value={data.password}
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
          <button type="submit">
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
import { Link } from "react-router-dom";
import '../styles/signUp.scss';

export function SignUp(){
    return(
        <div className="battleship">
            <div id="box">
                <h1 id="title">Login</h1>
                <div id="form">
                    <label for="username" id="labelUser">Nome de Usuário</label>
                    <input type="text" name="username" id="username"></input>

                    <label for="password" id="labelPassword">Senha</label>
                    <input type="password" name="password" id="password"></input>
                </div>
                
                <button type="button" id="button" onClick={verificar}>
                    Validar
                </button>
                <Link to="/createAccount">
                    <button variant="outlined" id="button">
                        Criar conta
                    </button>
                </Link>
                <div id="addLogin">
                    <Link to="/battleship" id="linkLogin" onClick={window.location.reload}>

                    </Link>
                </div>
            </div>
            <footer class="footer"></footer>
            <footer class="footertext">Tetris - André Correia Zarzur</footer>
        </div>
    )
}

function verificar(){
    if (localStorage.getItem(document.getElementById("username").value) != null){ // checar se username ja existe
        document.getElementById("username").setAttribute("class", "")
        if(localStorage.getItem(document.getElementById("username").value) == document.getElementById("password").value){
            document.getElementById("password").setAttribute("class", "")
        
            if (document.getElementById("botaoLogin2") == null){
                var button = document.createElement("BUTTON");
                button.setAttribute("id", "botaoLogin2");
                button.setAttribute("type", "button");
                document.getElementById("linkLogin").appendChild(button);
                document.getElementById("botaoLogin2").textContent = "Logar";
                ativar();
            }
        } else{ 
            document.getElementById("password").setAttribute("class", "errorInput")
            if (document.getElementById("botaoLogin2") != null){
                document.getElementById("linkLogin").removeChild(document.getElementById("botaoLogin2"));
            }
        }
    } else{
        if (document.getElementById("botaoLogin2") != null){
            document.getElementById("linkLogin").removeChild(document.getElementById("botaoLogin2"));
        }
        document.getElementById("username").setAttribute("class", "errorInput")
    }
}

function ativar(){
    localStorage.setItem("ativo", document.getElementById("password").value);
}
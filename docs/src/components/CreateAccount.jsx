import '../styles/CreateAccount.scss'

export function CreateAccount(){
    return(
        <div className="create">
            <div id="box">
                <h1 id="title">Cadastro</h1>
                <div id="form">
                    <label for="username" id="labelUser">Nome de Usuário</label>
                    <input type="text" name="username" id="username"></input>

                    <label for="password" id="labelPassword">Senha</label>
                    <input type="password" name="password" id="password"></input>
                </div>
            <button type="button" id="button" onClick={cadastrar}>Confirmar</button>
            </div>
        </div>
    )
}

function cadastrar(){
    document.getElementById("username").setAttribute("class", "")
    document.getElementById("password").setAttribute("class", "")
    if (document.getElementById("username").value != ""){
        if (localStorage.getItem(document.getElementById("username").value) == null){
            if(document.getElementById("username").value != document.getElementById("password").value){
                if (document.getElementById("password").value != ""){
                    let username = document.getElementById("username").value
                    let password = document.getElementById("password").value
                    localStorage.setItem(username, password)
                    document.getElementById("username").setAttribute("class", "correctInput")
                    document.getElementById("password").setAttribute("class", "correctInput")
                } else{
                    document.getElementById("password").setAttribute("class", "errorInput")
                }
            } else{
                document.getElementById("password").setAttribute("class", "errorInput")
            }
        } else{
            document.getElementById("username").setAttribute("class", "errorInput")
        }
    } else{
        document.getElementById("username").setAttribute("class", "errorInput")
    }
}

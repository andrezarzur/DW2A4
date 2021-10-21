export const validate = {
    nome (value, field){
        if (value == ""){
            document.getElementById(field).className = "errorInput"
        } else if (!/^[a-zA-Z]+$/.test(String(value).replace(/ /g, ""))){
            document.getElementById(field).className = "errorInput"
        } else{
            document.getElementById(field).className = field
        }
    },

    cpf (value, field){
        if (value == ""){
            document.getElementById(field).className = "errorInput"
        } else if (String(value).length < 14){
            document.getElementById(field).className = "errorInput"
        } else{
            const cpf = String(value).replace(/[.-]/g, "")
            let index = 0
            let total = 0
            for (let i = 10; i > 1; i--){
                total += parseInt(cpf.charAt(index)) * i
                index += 1
            }
            total = (total * 10) % 11
            if (total == parseInt(cpf.charAt(9))){
                let index2 = 0
                let total2 = 0
                for (let j = 11; j > 1; j--){
                    total2 += parseInt(cpf.charAt(index2)) * j
                    index2 += 1
                }
                total2 = (total2 * 10) % 11
                if (total2 == parseInt(cpf.charAt(10))){
                    document.getElementById(field).className = field
                } else{
                    document.getElementById(field).className = "errorInput"
                }
            } else{
                document.getElementById(field).className = "errorInput"
            }
        }
    },

    dt_nasc (value, field){
        if (value == ""){
            document.getElementById(field).className = "errorInput"
        } else if (String(value).length < 10){
            document.getElementById(field).className = "errorInput"
        } else{
            if (parseInt(String(value).charAt(0) + String(value).charAt(1)) > 31){
                document.getElementById(field).className = "errorInput"
            } else if (parseInt(String(value).charAt(3) + String(value).charAt(4)) > 12){
                document.getElementById(field).className = "errorInput"
            } else if (parseInt(String(value).charAt(6) + String(value).charAt(7) + String(value).charAt(8) + String(value).charAt(9)) > 2021){
                document.getElementById(field).className = "errorInput"
            } else{
                document.getElementById(field).className = field
            }
        }
    },

    email (value, field){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (value == ""){
            document.getElementById(field).className = "errorInput"
        } else if (re.test(value)){
            document.getElementById(field).className = field
        } else{
            document.getElementById(field).className = "errorInput"
        }
    },

    fone (value, field){
        if (value == ""){
            document.getElementById(field).className = "errorInput"
        } else if (String(value).length < 14){
            document.getElementById(field).className = "errorInput"
        } else{
            if (/[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579]/.test(String(value).charAt(1) + String(value).charAt(2))){
                if (String(value).length == 14){
                    let numero = String(value).replace("-", "").replace("(", "").replace(")", "").replace(String(value).charAt(1), "").replace(String(value).charAt(2), "").replace(String(value).charAt(4), "")
                    if (/[2-8][0-9]{3}[0-9]{4}/.test(String(numero))){
                        document.getElementById(field).className = field
                    } else{
                        document.getElementById(field).className = "errorInput"
                    }
                } else if (String(value).length == 15){
                    let numero = String(value).replace("-", "").replace("(", "").replace(")", "").replace(String(value).charAt(1), "").replace(String(value).charAt(2), "").replace(String(value).charAt(4), "")
                    if (/9[1-9][0-9]{3}[0-9]{4}/.test(String(numero))){
                        document.getElementById(field).className = field
                    } else{
                        document.getElementById(field).className = "errorInput"
                    }
                }
            } else{
                document.getElementById(field).className = "errorInput"
            }
        }
    },

    cep (value, field){
        if (value == ""){
            document.getElementById(field).className = "errorInput"
        } else if (String(value).length < 9){
            document.getElementById(field).className = "errorInput"
        } else{
            document.getElementById(field).className = field
        }
    },
}




document.querySelectorAll('input').forEach(($input) => {
    const field = $input.className

    document.querySelector('button').addEventListener('click', (e) => {
        const x = document.getElementById(field).value
        validate[field](x, field)
    })
})



// document.querySelector('button').addEventListener('click', Validate)
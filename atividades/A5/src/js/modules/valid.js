export const validate = {
    cep (value, field){
        if (value == ""){
            document.getElementById(field).className = "errorInput"
        } else if (String(value).length < 9){
            document.getElementById(field).className = "errorInput"
        } else{
            document.getElementById(field).className = field
        }
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.className
    document.querySelector('button').addEventListener('click', (e) => {
        const x = document.getElementById(field).value
        validate[field](x, field)
    }) 
})
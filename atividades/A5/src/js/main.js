import {masks} from './modules/mask.js'
import {validate} from './modules/valid.js'
import pesquisacep from './modules/cepAPI.js'
import pesquisacovid from './modules/covidAPI.js'


let cep = document.getElementById("cep").value

function covid(cep){
    cep.replace(/\D/g, '')

    pesquisacep(cep).then(function(result) {
        console.log(result)
        const resultado = result

        async function montarHTML(){
            document.getElementById("estado").innerHTML = `Estado: .........`;
                document.getElementById("casos").innerHTML = `Casos: .........`;
                document.getElementById("suspeitos").innerHTML = `Suspeitas: .........`;
                document.getElementById("mortes").innerHTML = `Mortes: .........`;
            const covidResult = await pesquisacovid(resultado)
            if (covidResult.state != undefined){
                document.getElementById("estado").innerHTML = `Estado: ${covidResult.state}`;
                document.getElementById("casos").innerHTML = `Casos: ${covidResult.cases}`;
                document.getElementById("suspeitos").innerHTML = `Suspeitas: ${covidResult.deaths}`;
                document.getElementById("mortes").innerHTML = `Mortes: ${covidResult.suspects}`;
            } else {
                document.getElementById("estado").innerHTML = `Estado: Inexistente`;
                document.getElementById("casos").innerHTML = `Casos: Inexistente`;
                document.getElementById("suspeitos").innerHTML = `Suspeitas: Inexistente`;
                document.getElementById("mortes").innerHTML = `Mortes: Inexistente`;
            }
        }

        montarHTML()
    })
}




document.querySelectorAll('input').forEach(($input) => {
    const field = $input.className
    document.querySelector('button').addEventListener('click', (e) => {
        const x = document.getElementById(field).value
        covid(x, field)
    }) 
})
export const masks = {
    cep (value){
        return value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2').replace(/(-\d{3})\d+?$/, '$1')
    }
}


document.querySelectorAll('input').forEach(($input) => {
    if ($input.dataset.js != undefined){
        const field = $input.dataset.js
        $input.addEventListener('input', (e) => {
            e.target.value = masks[field](e.target.value)
        }, false)
    }
})
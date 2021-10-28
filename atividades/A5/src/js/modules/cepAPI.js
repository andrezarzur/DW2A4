   
export default function pesquisacep(valor) {
    return fetch('https://viacep.com.br/ws/'+valor+'/json/')
    .then(res => res.json())
    .then((out) => {
      let x = out.uf;
      return(x)
    })
    .catch(err => {
      throw err
    });

};
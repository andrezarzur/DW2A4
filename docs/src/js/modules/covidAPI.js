export default function pesquisacovid(valor) {
    return fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/' + valor)
    .then(res => res.json())
    .then((out) => {
      console.log(out);
      return(out)
    })
    .catch(err => {
      throw err
    });
};
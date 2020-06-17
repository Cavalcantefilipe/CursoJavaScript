const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((response) => {
  const funcionarios = response.data;

  const chinesa = (e) => e.pais == "China" && e.genero == "F";
  const funcionariosChines = funcionarios.filter(chinesa);
  var menor = funcionariosChines[1]
  const chinesaMenorSalario = funcionariosChines.forEach(element => {
      if(menor.salario > element.salario){
          menor = element
      }
});

console.log(menor)

  });

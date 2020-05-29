function jurosSimples(ci, jr, ta) {
  return (ci+(ci * jr * ta)).toFixed(2)
}
function jurosComposto(ci, jr, ta) {
    return (ci*Math.pow((1+jr),ta)).toFixed(2)
  }
console.log(jurosSimples(1000,0.01,10))
console.log(jurosComposto(5000,0.01,6))
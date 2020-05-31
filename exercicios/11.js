const anoBissexto = (ano) => ano%4 == 0 || ano%400 == 0 && ano%100 != 0 ?  true : false

console.log(anoBissexto(2016))
console.log(anoBissexto(2015))
console.log(anoBissexto(2012))
console.log(anoBissexto(2008))
console.log(anoBissexto(1998))
console.log(anoBissexto(2000))
console.log(anoBissexto(1996))
console.log(anoBissexto(1424))
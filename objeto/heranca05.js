console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola Coder'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,5,6].first())


String.prototype.toString = function(){
    return 'lascou tudo'
}

console.log('oi'.toString())
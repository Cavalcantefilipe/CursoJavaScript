function fatorial(n){
    let res = n
    for(let i = n-1; i != 1;i--){
        res = res*i
    }
    return res
}
console.log(fatorial(2))
console.log(fatorial(5))
console.log(fatorial(7))
console.log(fatorial(12))
function media(array){
    total = 0
    array.forEach(element => {
        total = element + total
    })
    return (total/array.length).toFixed(2)
}

console.log(media([10,0]))
console.log(media([10,10,10,10,10]))
console.log(media([10,10,8,10,10]))
console.log(media([10,0,0]))
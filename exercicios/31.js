function negativos(array){
    let negativosArray = array.filter(nr => nr < 0).length
    return negativosArray
}
console.log(negativos([10, 5, -7, 3, -1, 3, -11, -20, 6, 9]))
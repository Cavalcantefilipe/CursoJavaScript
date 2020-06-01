function negativos(array){
    let negativosArray = array.filter(nr => nr < 0).length
    return negativosArray
}
console.log(negativos([10,-10,7,20,2,4,8,-2,-1,-7]))
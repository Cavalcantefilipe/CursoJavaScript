function resolve(ax2,bx,c){

    let delta = (bx*bx)-(4*ax2*(c))

    if(delta < 0 ){
        return console.log('Delta é negativo')
    }else{
        let x1= ((-1*bx) + Math.sqrt(delta)) / (2*ax2)
        let x2=((-1*bx) - Math.sqrt(delta)) / (2*ax2)

        return [x1,x2]
    }
}

console.log(resolve(1,-5,6))
console.log(resolve(4,8,6))
console.log(resolve(1,-4,-5))
console.log(resolve(1,12,-13))
console.log(resolve(2,5,9))



function triangulo(x,y,z){

    if(verificaTriangulo(x,y,z)){

        if(x == y && y == z){
            console.log('Equilátero')
        }else if(x==y || y==z || x==z){
            console.log('Isósceles')
        }else{
            console.log('Escaleno')
        }
    }else(console.log('Não é um triangulo'))
    
}

function verificaTriangulo(x,y,z){
    if(x < y+z && x > y-z ){
        if(y < x+z && y > z-x){
            if(z < x+y && z > y-x){
                return true
            }
        }
    }
    return false
}

triangulo(10,10,10)
triangulo(12,9,6)
triangulo(3,5,10)
triangulo(12,12,6)
//named function
function nSquare(a) {
    return a*a
}
console.log("using named function:"+nSquare(9))

//anonymous function
var aSquare=function(a){
    return a*a
}
console.log("using anonymous function:"+aSquare(7))

//constructor
var cSquare=new Function("a","return a*a")
console.log("using constructor:"+cSquare(6))

//slef invoking function
var b = (function (a) {
    console.log("self invoking function is invoked")
     return a*a
}(2))
console.log('using self invoking function:'+b)

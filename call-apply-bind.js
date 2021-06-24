var obj = {
    a:5
}
//call
function myfunction() {
    var x=4
    var y=6
    return x+y+this.a
}
console.log(myfunction.call(obj))

//apply
function myfunction(x,y) {
    return x+y+this.a
}
console.log(myfunction.apply(obj,[2,3]))

//bind
function myfunction() {
    var x=7
    var y=8
    return x+y+this.a
}
newfunction=myfunction.bind(obj)
console.log(newfunction())
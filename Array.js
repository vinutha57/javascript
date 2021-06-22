// function fnarray(){
//     var a = [-10,10,20,30,40,50,60,70,80,90,100]
//     // console.log(a)
//     //a.push(110)
//     //console.log(a)
//     // a.pop()
//     // console.log(a)
//     // a.unshift(-20)
//     // console.log(a)
//     // a.shift()
//     // console.log(a)
//     // console.log(a.length)

// }
// fnarray()


//FILTER

function fnFilter(){
    var a = [1,2,3,4,5,6,7,8,9,10]
    var anew=a.filter(function(e,i){
        return e>5
    })
    return anew
}
console.log(fnFilter())
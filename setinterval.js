function fnsetinterval(){

   var a = setInterval(function () {
       console.log("Vinutha") 
    },2000)

    setTimeout(function() {
     clearInterval(a)  
    },10000)

}
fnsetinterval()
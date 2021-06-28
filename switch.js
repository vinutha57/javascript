function fnstart(e) {
    var h2Ref = document.getElementById('h2')
    switch(e.target.id){
        case 'morning':
            h2Ref.innerText="Good Morning"
            h2Ref.style.color = 'green'
            break;
        case 'afternoon':
            h2Ref.innerText="Good Afternoon"
            h2Ref.style.color = 'red'
            break;
        case'evening':
            h2Ref.innerText='Good Evening'
            h2Ref.style.color = 'orange'
            break;
        default:
            h2Ref.innerText='Good Night'
            h2Ref.style.color = 'black'
    }
    

}
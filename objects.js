function fn(){
    var info={
        name:"Vinutha",
        email:"vinuthasrinivas94@gmail.com",
        contactdetails:{
            mobile:7483792649,
            landline:0802334455
        },
        address:{
            Hno:88,
            city:"bengaluru",
            state:"karnataka",
        }
        
     }
     console.log(info) 
     console.log(info.name)
     console.log(info.email)
     console.log(info.contactdetails.mobile)
     console.log(info.address.city)
     console.log(info.address.state)
     //insertion
     info.address.pincode=562123
     console.log(info)
     //deletion
     delete info.address.Hno
     console.log(info)
     //updation
     info.address.state="mangalore"
     console.log(info)
}
fn()
var obj = {
    0:{
        name:"vishnu",
        age:20,
        branch:"IT"
    },
    1:{
        name:"naveen",
        age:21,
        branch:"cse"
    }
}

var obj1 = obj
// console.log(obj1)
// console.log(obj1 === obj)
obj[2] = {
    name:"abhi",
    age:30,
    branch:"EEE"
}
// console.log(Object.values(obj))
obj.foreach((item) =>{
    console.log(item)
})

// console.log(obj1 === obj)
var obj2 = {
    0:{
        name:"vish",
        age:20,
        branch:"IT"
    },
}
obj1 = obj2
// console.log(obj2 === obj1)

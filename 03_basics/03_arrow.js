const user ={
    name:'nirmal',
    price:2131,
    welMess:function(){
        console.log(`${this.name} , wellcome to website`)
        console.log(this);
    }
    
}

// console.log(this);

// user.welMess();
// user.name = 'pooja';
// user.welMess();

const Twofn = function() {
    let a = 5
    // console.log(this)
    console.log(this.a)
}
// Twofn()
// const Threefn = ()=> {
//     let a =5
//     console.log(this)
//     console.log(this.a)
// }


// Threefn()


// function fetch(){
//       a=7 ;
//     console.log(a)
// }
 
// let a ;
// fetch();



// const addTwo = (num1 ,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 ,num2) =>  num1 + num2
// const addTwo = (num1 ,num2) =>  (num1 + num2)

const user2 ={
    name:'nirmal',
    price:2131,
    welMess:function(){
        console.log(`${this.name} , wellcome to website`)
        console.log(this);
}
}
    
const addTwo = (num1) =>  ({
    username:'nirmal'
})

console.log(addTwo(2,3));

const myArray =[2,3,5,6,7]


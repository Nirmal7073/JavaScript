

function sayMyName(){
    console.log('n');
    console.log('i');
    console.log('r');
    console.log('m');
    console.log('a');
    console.log('l');
}
// sayMyName();

// function addTwoNumber(numb1,numb2){
//     console.log( numb1+numb2)
// }

// function addTwoNumber(numb1,numb2){
//    let result = numb1+numb2
//    return result;
// }

// function addTwoNumber(numb1,numb2){
//     return numb1+numb2 
//  }
 
// const result = addTwoNumber(2,3);

// console.log("Result ", result)

// function loginUserMessage(username){
//     if(username === undefined){
//       console.log('please enter username');
//       return
//     }
//     return `${username} is logged in`
// }

// function loginUserMessage(username){
//     if(!username){
//       console.log('please enter username');
//       return
//     }
//     return `${username} is logged in`
// }

// function loginUserMessage(username="nimu"){
//     return `${username} is logged in`
// }

// const a = loginUserMessage();
// console.log(a);



function calculateCart(...numb1) {
    return numb1
}
function calculateCart(val1,val2,...numb1) {
    return numb1
}
// console.log(calculateCart(200,300,200));

const user = {
    name: 'nirmal',
    age: 30
}

// function handleObject(anyobject) {
//     console.log(`my name is ${anyobject.name} and age is ${anyobject.age}` )
// }

// handleObject(user);
// handleObject({
//     name: 'pooja',
//     age:24
// })

const myNewarray = [100,220,344,456]

function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewarray));

console.log(returnSecondvalue([
    100,220,344,456
]));
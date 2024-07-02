

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

function loginUserMessage(username="nimu"){
    return `${username} is logged in`
}

const a = loginUserMessage();
console.log(a);
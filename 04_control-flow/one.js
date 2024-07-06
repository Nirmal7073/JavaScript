

// if(2== "2"){
//     console.log('exexuted');
// }
// if(2 != 5) {
//     console.log('exexuted d');
// }
//< , > ,<= , >= ,==,!= ,===,!==


const score =300

// if(score > 100) {
//     const power ="fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)

// if(score > 200) console.log('test');//implicite scope


const userLoggedIn = true ;
const debitCard = false ;

// if(userLoggedIn && debitCard ){
//     console.log('Allow to login')
// }



// false value

// false , 0 ,-0, BigInt 0n, "",null,undifined,NaN

// truthy value
//'0',"false"," "; []; {};function(){}

// empty Array check

// const array6 = [1,2]

// if(array6.length !== 2 ){
//     console.log('array is empty');
// }

// const emptyObj ={

// }
// if(Object.keys(emptyObj).length === 0 ){
//     console.log('object is empty');
// }
// console.log(Object.keys(emptyObj))

// false == 0 //true
// false ==''//true
// 0 == '' // true

//nullish Coalescing Operaor (??) : null , undefined

// let val1;
// // val1 =5 ?? 10;
// // val1 = null ?? 10;
// val1 = null ?? undefined;
// val1 = null ?? 10 ?? 20;
// console.log(val1);

// const userEmail = "0"

// if(userEmail) {
//     console.log('got user email');
// }else{
//     console.log("don't have user email")
// }
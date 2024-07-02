//object constructor (singleton // object.create) 
//object literals

const myKey = Symbol(1)
const JsUser = {
    name: 'nirmal',
    age:31,
    [myKey]: 'symbol key',
    "last-name": 'patel',
    location:'valsad',
    email:'nirmal@good.com',
    isLoggedIn:false,
    LastLoginDays:['monday', 'saturday']
}


JsUser.name = 'pooja'
// console.log( JsUser.name);
// Object.freeze(JsUser) //freeze the object
JsUser.name = "aerik"
JsUser.birthyear =1992
JsUser.greeting = function(){
    console.log('hello how are you?')
}
JsUser.greetingTwo = function(){
    console.log(`hello ${this.name} how are you?`)
}

console.log( JsUser);
// console.log( JsUser.greeting());
console.log( JsUser.greetingTwo());
// console.log( JsUser['last-name'] , JsUser[myKey]);


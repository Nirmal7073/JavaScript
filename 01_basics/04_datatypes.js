/**In javaScripat have a two Datatypes 1) primitive 2) Non primitivive
==> primitive datatypes (also call Immutable datatype. beacaue of we can't change the orignal value. primitive datatype used stack memory.)
for example 
let name = "nirmal";
let anothername = name
anothername = "nimu"
console.log(name) 
console.log(anothername)

1)Undifine
2)null
3)string
4)number
5)boolean
6)symbol
7)BigInt

==> Non Primitive (Refrence) Datatype (aslo call mutable datatye.)
1)function
2)object
3)Array

//stack(primitive) , Heap (Non-Primitive)
**/

let name = "nirmal";
let anothername = name
anothername = "nimu"
console.log(name) 
console.log(anothername)


const userOne = {
    name : 'nirmal',
    last : 'patel',
    birth : '21-12-1992',
    age: 31
}

const userTwo = userOne ;
userTwo.name ="Harry"
console.log(userOne , userTwo)


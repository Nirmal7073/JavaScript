// const tinderUser = new Object()
const tinderUser = {}


tinderUser.id="123qwe"
tinderUser.name = "nirmal"
tinderUser.isLoggedIn =false


// console.log(tinderUser);

const regularUser ={
    email : 'some@gmail.com',
    fullname:{
        userfullName: {
            firstName: 'nirmal',
            lastName: 'patel'
        }
    }

}

// console.log(regularUser.fullname.userfullName.firstName)

const obj1 = {1:'a' , 2: 'b'}
const obj2 = {3:'c' , 4: 'd'}

// const obj3 = {...obj1,...obj2}

const obj4 = Object.assign({},obj1,obj2)

// console.log(obj3)
// console.log(obj4)

const user = [
    {
        id: 1,
        email: 'n@gmail.com',
        name:'nirmal'
    },
    {
        id: 2,
        email: 'p@gmail.com'
    },
    {
        id: 3,
        email: 'q@gmail.com'
    },
    {
        id: 4,
        email: 'r@gmail.com'
    },
]

// console.log(user[1].email)

console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('names'));
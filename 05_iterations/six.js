//foreach loop not return value
//filter loop can return value

const array = ['java', 'css', 'html']

const value = array.forEach((arr) => {
    //   console.log(arr);
    return arr
})

// console.log(value)

const myNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const myFilter = myNumb.filter((numb)=>{
//   return numb > 5
// })
// console.log(myFilter)

const newNumb = []

// myNumb.forEach( (numb) => {
//     if(numb >5){
//         newNumb.push(numb)
//     }
// })

// console.log(newNumb)


const books = [
    {
        title: 'Book one',
        genre: 'jhon',
        publish: 1992
    },
    {
        title: 'Book two',
        genre: 'harry',
        publish: 1995
    },
    {
        title: 'Book three',
        genre: 'bruno simon',
        publish: 1998
    },
    {
        title: 'Book four',
        genre: 'harry',
        publish: 2000
    },
    {
        title: 'Book five',
        genre: 'bruno simon',
        publish: 2004
    },
    {
        title: 'Book six',
        genre: 'jhon',
        publish: 2024
    },

]


// const myBooks = books.filter( (book)=> {
//       return book.genre === "bruno simon"
// })
// const myBooks1 = books.filter( (book)=> {
//     return book.publish >= 2000
// })
const myBooks2 = books.filter( (book)=> {
    return book.publish >= 2000 && book.genre == 'bruno simon'
})
console.log(myBooks2)
// foreach for array (high order loop)
// The forEach loop in JavaScript is a method available on arrays that executes a provided function once for each array element (index, value ,array)

const array = ['nimu','poo','aeru']

// array.forEach( (arr) => {
//   console.log(arr)
// })

function printMe(items){
    console.log(items)
}

// array.forEach(printMe)

array.forEach( (arr , index ,array) => {
    console.log(arr ,index ,array)
})

const myCoding= [
    {
        language:"javascript",
        date:2023
    },
    {
        language:"c++",
        date:2020
    },
    {
        language:"python",
        date:2020
    }
]

myCoding.forEach( (data) => {
    console.log(data.language)
} )
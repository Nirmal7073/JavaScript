//Immediately Invonked Function Expressions (IIFE)


(
    function user(name){
        console.log(`hi ${name}`)
    }
)('nirmal');

(
    (name)=> {
        console.log(`hi ${name}`)
    }
)('pooja');
const marvel_hero = ['Thor', 'Ironman' , 'Spiderman']
const dc_hero = ['superman' , 'flash' , 'batman']

// marvel_hero.push(dc_hero);
// console.log(marvel_hero);
// console.log(marvel_hero[3][0]);
// ==> concat and spread return new array

const allHeros =  marvel_hero.concat(dc_hero);
// console.log(allHeros);

const all_new_hero = [...marvel_hero,...dc_hero]
// console.log(all_new_hero);


//spread all array using flat
// const anOther_array = [1,2,3,[4,5,6],7,[3,4,6,[4,5]],9]
// // const real_another_array = anOther_array.flat(2)
// const real_another_array = anOther_array.flat(Infinity)

// console.log(real_another_array)


// const arrayConvert = 'nirmal'
// const convert_arrary = Array.from(arrayConvert);
// console.log(convert_arrary);
// const convert_arrary2 = Array.isArray(convert_arrary);
// console.log(convert_arrary2);
// const convert_arrary3 = Array.from({name :'nirmal'})//interestings [] (eamty object return)
// console.log(convert_arrary3);

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1 ,score2 ,score3));
// let str =  'hello world'
// let str =  'lorem ipsum'
// let str = 'javascript is cool'
// str.length
// console.log(str.length)

// let str =  'hello world'
// let str =  'lorem ipsum'
// let str = 'javascript is cool'
//
// console.log(str.toUpperCase(str))

// let str = 'HELLO WORLD'
// let str = 'LOREM IPSUM'
// let str = 'JAVASCRIPT IS COOL'
// console.log(str.toLowerCase(str))

// let str = ' dirty string   '
// console.log(str.length)
// let s = str.trim()
// console.log(s.length)

// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '))

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let map = arr.map((number) => (number.toString()))
// console.log(map)

// let nums = [11,21,3];
// const sortNums = (direction,arr) =>{
//     if (direction === 'ascending'){
//         arr.sort((a, b) => a-b)
//     }else if (direction === 'descending'){
//         arr.sort((a, b) =>b-a )
//     }
//     return arr
// }
// console.log(sortNums('ascending',nums));

// let coursesAndDurationArray  = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {titcoursesAndDurationArrayle: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
//
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// let deck = [{cardSuit: 'Spade', value: 6, color: 'Black'}, {
//     cardSuit: 'Clubs', value: 6, color: 'Black'
// }, {cardSuit: 'Hearts', value: 6, color: 'Red'}, {cardSuit: 'Diamonds', value: 6, color: 'Red'}, {
//     cardSuit: 'Spade', value: 7, color: 'Black'
// }, {cardSuit: 'Clubs', value: 7, color: 'Black'}, {cardSuit: 'Hearts', value: 7, color: 'Red'}, {
//     cardSuit: 'Diamonds', value: 7, color: 'Red'
// }, {cardSuit: 'Spade', value: 8, color: 'Black'}, {cardSuit: 'Clubs', value: 8, color: 'Black'}, {
//     cardSuit: 'Hearts', value: 8, color: 'Red'
// }, {cardSuit: 'Diamonds', value: 8, color: 'Red'}, {cardSuit: 'Spade', value: 9, color: 'Black'}, {
//     cardSuit: 'Clubs', value: 9, color: 'Black'
// }, {cardSuit: 'Hearts', value: 9, color: 'Red'}, {cardSuit: 'Diamonds', value: 9, color: 'Red'}, {
//     cardSuit: 'Spade', value: 10, color: 'Black'
// }, {cardSuit: 'Clubs', value: 10, color: 'Black'}, {cardSuit: 'Hearts', value: 10, color: 'Red'}, {
//     cardSuit: 'Diamonds', value: 10, color: 'Red'
// }, {cardSuit: 'Spade', value: 'Jack', color: 'Black'}, {
//     cardSuit: 'Clubs', value: 'Jack', color: 'Black'
// }, {cardSuit: 'Hearts', value: 'Jack', color: 'Red'}, {
//     cardSuit: 'Diamonds', value: 'Jack', color: 'Red'
// }, {cardSuit: 'Spade', value: 'Queen', color: 'Black'}, {
//     cardSuit: 'Clubs', value: 'Queen', color: 'Black'
// }, {cardSuit: 'Hearts', value: 'Queen', color: 'Red'}, {
//     cardSuit: 'Diamonds', value: 'Queen', color: 'Red'
// }, {cardSuit: 'Spade', value: 'King', color: 'Black'}, {
//     cardSuit: 'Clubs', value: 'King', color: 'Black'
// }, {cardSuit: 'Hearts', value: 'King', color: 'Red'}, {
//     cardSuit: 'Diamonds', value: 'King', color: 'Red'
// }, {cardSuit: 'Spade', value: 'Ace', color: 'Black'}, {
//     cardSuit: 'Clubs', value: 'Ace', color: 'Black'
// }, {cardSuit: 'Hearts', value: 'Ace', color: 'Red'}, {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}];
//
// console.log(deck.filter(value => value.cardSuit === 'Spade' && value.value === 'Ace'));
// console.log(deck.filter(value => value.value === 6));
// console.log(deck.filter(value => value.color === 'Red'));
// console.log(deck.filter(value => value.cardSuit === 'Hearts'));
// console.log(deck.filter(value => value.cardSuit === 'Clubs' && value.value >= 9 ||value.cardSuit === 'Clubs' &&  value.value === 'Jack'
//     ||value.cardSuit === 'Clubs' && value.value === 'Queen' ||value.cardSuit === 'Clubs' && value.value === 'King' || value.cardSuit === 'Clubs' && value.value === 'Ace'));

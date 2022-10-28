// MAP Method
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

// const ages = people.map((person) => {
//     console.log(person.name)
// })

const names = people.map((person) => (
    `<h2>${person.name.toUpperCase()}</h2>`
))

const ages = people.map((person) => (
    `<h6>${person.age}</h6>`
))

const result = document.querySelector('#result')

result.innerHTML = names.join('')
result.innerHTML = ages.join('')
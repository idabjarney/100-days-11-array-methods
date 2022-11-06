console.log('---------- index.js ----------')

const fruits = ['apple', 'orange', 'banana', 'kiwi'];

// fruits.forEach(onFruit);


// function onFruit(item, index) {
//   if (item === 'kiwi') {
//     item = item.toUpperCase();
//   }
//   console.log(item)
// }

const newfruits = fruits.map((fruit, index) => {
  if (fruit === 'kiwi') {
    return 'i like ' + fruit;
  }
  return 'i dont like ' + fruit;
})

// console.log(newfruits)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// const mulitpliedByTen = numbers.map((number, index) => {
//   return number * index;
// })

// console.log(mulitpliedByTen)

const oddNumbers = numbers.filter((number) => {
  return number % 2 !== 0;
});

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

// console.log(oddNumbers, evenNumbers);


const people = [
  {
    name: 'Peter',
    age: 67
  },
  {
    name: 'Anna',
    age: 32
  },
  {
    name: 'Sunna',
    age: 10
  },
  {
    name: 'Martin',
    age: 25
  },
  {
    name: 'Ida',
    age: 29
  }
]


const newPeople = people.map((person, index) => {
  const isAdult = person.age >= 18;
  return {
    ...person,
    isAdult,
    id: index
  }
})

const adults = newPeople.filter((person) => {
  return person.isAdult;
})

// console.log(newPeople, adults)

const totalAge = newPeople.reduce((accumulated, current)  => {
  // return accumulated + current.isAdult ? 1 : 0;
  if (current.isAdult) {
    return accumulated + 1;
  } else {
    return accumulated;
  }
}, 0);

console.log(totalAge)

console.log('------------------------------')
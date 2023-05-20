Promise.resolve('hi').then((d) => console.log(d));


// Promises

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Worked')
  } else {
    reject('Error, it broke');
  }
});

// Promise.all([//promises]);

// async await ES8

// ES9

// object spread operator

const animals = {tiger: 28, lion: 5, monkey: 2};

const {tiger, ...rest} = animals;

console.log(tiger, rest)


promise.then(result => console.log(result))

// promises
// parallel - Promise.all()
// sequential - await
// race - Promise.race()


// ES2020 - allSettled()
Promise.allSettled([Promise.resolve('gg'), Promise.reject('rejected')]).then(result => console.log(result));


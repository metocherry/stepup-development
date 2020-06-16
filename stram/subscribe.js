function from(collection) {
  var values = collection;
  var funcs;
  
  return {
    pipe(...operators) {
      funcs = operators;
      return this;
    },
    subscribe(subscriber) {
      const [head, ...operators] = funcs;

      const iterators = operators.reduce((iterator, fn) => {
        return fn(iterator);
      }, head(values));

      for (const v of iterators) {
        subscriber.next(v);
      }
    }
  };
}

function map(predicate) {
  return function* (values) {
    for (const v of values) {
      yield predicate(v);
    }
  };
}
  
function filter(predicate) {
  return function* (values) {
    for (const v of values) {
      if (predicate(v)) yield v;
    }
  };
}

from([
  {name: 'Joe', age: 31}, 
  {name: 'Bob', age: 25},
  {name: 'Bob', age: 32},
])
.pipe(
  filter((user) => user.age >= 30),
  map((user) => user.age),
)
.subscribe({
  next(value) {
    console.log(value);
  }
});

// from([
//   {name: 'Joe', age: 31}, 
//   {name: 'Bob', age: 25},
//   {name: 'Bob', age: 32},
// ])
// .pipe(
//   map((user) => user.age),
//   filter((age) => age >= 30),
// )
// .subscribe({
//   next(value) {
//     console.log(value);
//   }
// });
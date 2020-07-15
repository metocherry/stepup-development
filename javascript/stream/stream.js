var data = [
  {name: 'Joe', age: 31}, 
  {name: 'Bob', age: 25},
  {name: 'Bob', age: 32},
];
  
function* map(predicate, values) {
  for (const v of values) {
    yield predicate(v);
  }
}
  
function* filter(predicate, values) {
  for (const v of values) {
    if (predicate(v)) yield v;
  }
}
  
function go(head, ...funcs) {
  return (values) => {
    const iterators = funcs.reduce((iterator, func) => {
      return func(iterator);
    }, head(values));
        
    for (const v of iterators) {
      console.log(v);
    }
  };
}
  
go(
  (values) => map((user) => user.age, values),
  (values) => filter((age) => age >= 30, values),
)(data);
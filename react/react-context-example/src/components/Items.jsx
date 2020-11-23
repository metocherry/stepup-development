import React, { useContext, useState } from 'react';
import TodoContext from '../TodoContext';

export const NewItem = () => {
  const [text, setText] = useState('');

  const todoContext = useContext(TodoContext);

  return (
    <div className="Item">
      <input type="text" placeholder="New Task" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => todoContext.add(text)}>Add</button>
    </div>
  );
};

export function ItemList({ items = [], remove }) {
  const todoContext = useContext(TodoContext);

  return todoContext.items.map((item, i) => <Item key={i} text={item} index={i} remove={todoContext.remove} />);
}

export function Item({ text, index, remove }) {
  return (
    <div className="Item">
      {index + 1} {text}
      <span onClick={() => remove(index)}>Done</span>
    </div>
  );
}

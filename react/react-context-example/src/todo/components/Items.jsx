import React, { useState } from 'react';
import { useTodoContext, addTodo, removeTodo } from '../store/TodoContext';

export const NewItem = () => {
  const [text, setText] = useState('');

  const { dispatch } = useTodoContext();

  return (
    <div className="Item">
      <input type="text" placeholder="New Task" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(addTodo(text))}>Add</button>
    </div>
  );
};

export function ItemList() {
  const { items, dispatch } = useTodoContext();

  return items.map((item, i) => <Item key={i} text={item} index={i} dispatch={dispatch} />);
}

export function Item({ text, index, dispatch }) {
  return (
    <div className="Item">
      {index + 1} {text}
      <span onClick={() => dispatch(removeTodo(index))}>Done</span>
    </div>
  );
}

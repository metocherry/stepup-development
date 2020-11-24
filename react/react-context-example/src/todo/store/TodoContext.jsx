import React, { createContext, useContext, useReducer } from 'react';

export const TodoContext = createContext();

const initialItems = ['Extract todo state to todo context', 'Implement todo provider'];

// 비즈니스 - context
// UI - component composition

// Actions
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CLEAR_ALL = 'CLEAR_ALL';

// Action Creator
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function clearAll() {
  return { type: CLEAR_ALL };
}

// Reducer
export function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.text];
    }

    case REMOVE_TODO: {
      const copy = [...state];
      copy.splice(action.index, 1);
      return copy;
    }

    case CLEAR_ALL: {
      return [];
    }

    default:
      return state;
  }
}

const TodoProvider = (props) => {
  const [items, dispatch] = useReducer(todoReducer, initialItems);
  const todoData = { items, dispatch };

  return <TodoContext.Provider value={todoData} {...props} />;
};

function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodoContext };

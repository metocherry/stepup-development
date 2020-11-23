import React, { useState, useCallback } from 'react';
import { ItemList, NewItem } from './components/Items';
import './App.css';
import TodoContext from './TodoContext';

const initialItems = ['Setup basic components', 'Add some styling'];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = useCallback((item) => {
    setItems((prevState) => [...prevState, item]);
  }, []);

  function handleRemoveItem(index) {
    const copy = [...items];
    copy.splice(index, 1);
    setItems(copy);
  }

  return (
    <TodoContext.Provider value={{ items, add: handleAddItem, remove: handleRemoveItem }}>
      <div className="App">
        <header className="App-header">
          <h2>🚀 ToDo App</h2>
          <NewItem />
          <ItemList />
        </header>
      </div>
    </TodoContext.Provider>
  );
}

export default App;

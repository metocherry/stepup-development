import React from 'react';
import logo from './logo.svg';
import './App.css';

function View() {
  console.log('render start');

  const [count, setCount] = React.useState(() => {
    console.log('initial useState');
    return 0;
  });

  const [name, setName] = React.useState('');

  React.useEffect(() => {
    console.log('no dependencies useEffect');

    return () => {
      console.log('cleanup no dependencies useEffect');
    }
  });

  React.useEffect(() => {
    console.log('[] dependencies useEffect');

    return () => {
      console.log('cleanup [] dependencies useEffect');
    }
  }, []);

  React.useEffect(() => {
    console.log('[count] dependencies useEffect');

    return () => {
      console.log('cleanup [count] dependencies useEffect');
    }
  }, [count]);

  React.useLayoutEffect(() => {
    console.log('layout effect');

    return () => {
      console.log('cleanup layout effect');
    };
  });

  const onIncrease = (e: React.MouseEvent) => setCount(count + 1);
  const onChange = (e: React.MouseEvent) => setName('Jinseok');

  console.log('render end');

  return (
    <React.Fragment>
        <div>
          <p>count : {count}</p>
          <p>name : {name}</p>
        </div>
        <button onClick={onIncrease}>increase</button>
        <button onClick={onChange}>change name</button>
    </React.Fragment>
  );
}

function App() {
  const [show, setShow] = React.useState(false);

  const onChangedShowView = (e: React.ChangeEvent<HTMLInputElement>) =>
    setShow(e.target.checked);

  return (
    <div className="App">
      <input type="checkbox" checked={show} onChange={onChangedShowView} /> Toogle View
      {show && <View /> }
    </div>
  );
}

export default App;

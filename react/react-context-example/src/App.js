import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TodoProvider } from './todo/store/TodoContext';
import { AuthProvider, useAuthContext, logout } from './auth/AuthContext';
import Todo from './todo/Todo';
import Login from './auth/Login';
import './App.css';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Greeting />
          <Switch>
            <PrivateRoute path="/todos">
              <TodoProvider>
                <Todo />
              </TodoProvider>
            </PrivateRoute>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

function Greeting() {
  const { auth, dispatch } = useAuthContext();

  if (auth.isLoggedIn)
    return (
      <p>
        Hello, {auth.name}!<button onClick={(e) => dispatch(logout())}>Logout</button>
      </p>
    );
  return <p>You are not logged in</p>;
}

export default App;

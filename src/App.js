import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import fetchRandomGreeting from './api/fetchGreetings';
import Greetings from './components/Greetings';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Greetings} />
      </Switch>
    </Router>
  );
};

export default App;

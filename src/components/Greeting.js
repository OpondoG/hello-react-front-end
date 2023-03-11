import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../actions/greetingActions';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return <h1>{greeting}</h1>;
}

export default Greeting;

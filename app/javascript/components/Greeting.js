import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';
import { Link } from 'react-router-dom';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.value);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <Link to="/page">Go to Next Page</Link>
      <h1>Wellcomes To Richards Page</h1>
      <h2>{greeting}</h2>
    </div>
  );
};

export default Greeting;
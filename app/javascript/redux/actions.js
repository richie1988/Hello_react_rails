import { setGreeting, setGreetingError } from './greetingReducers';

export const fetchRandomGreeting = () => {
  return (dispatch) => {
    fetch('/api/v1/messages')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => dispatch(setGreeting(data.greeting)))
      .catch((error) => {
        console.error('Error fetching greeting:', error);
        dispatch(setGreetingError(error.toString()));
      });
  };
};
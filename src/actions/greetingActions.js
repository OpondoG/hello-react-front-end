export const getGreeting = () => {
  return async (dispatch) => {
    dispatch(fetchGreetingRequest());
    try {
      const response = await fetch('http://your-api-endpoint.com/greeting');
      const data = await response.json();
      dispatch(fetchGreetingSuccess(data));
    } catch (error) {
      dispatch(fetchGreetingFailure(error.message));
    }
  };
};

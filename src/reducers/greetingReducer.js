const initialState = { greeting: '', error: null };

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GREETING_SUCCESS':
      return { ...state, greeting: action.payload, error: null };
    case 'GET_GREETING_FAILURE':
      return { ...state, greeting: '', error: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;

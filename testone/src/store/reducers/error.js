const initState = {
  hasError: false,
  goBack: '/'
}

const error = (state = initState, action) => {
  const { type, error } = action;

  switch (type) {
    case "ERROR":
      return {
        ...state,
        hasError: true,
        type: error.type,
        message: error.message,
        goBack: error.goBack ? error.goBack : '/'
      }
      
    case "ERROR_CLEAR":
      return {
        ...state,
        hasError: false,
      }
  
    default: return state;
  }
}

export default error;

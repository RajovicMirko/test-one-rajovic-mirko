const initState = {
  gists: null, // is array
  isLoading: true,
};

const gists = (state = initState, action) => {
  const { type, payload } = action;

  switch(type){
    case "GET_GISTS":
      return {
        ...state,
        isLoading: true
      }
    case "GET_GISTS_SUCCESS":
      return {
        ...state,
        gists: payload,
        isLoading: false
      }
    case "GET_GISTS_ERROR":
      return {
        ...state,
        isLoading: false
      }

    default: return state;
  }
}

export default gists;

const cryptoReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CRYPTO":
      return action.payload;

    default:
      return state;
  }
};

export default cryptoReducer;

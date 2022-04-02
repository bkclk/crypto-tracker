const coinReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COIN":
      return action.payload;
    case "CLEAR_COIN":
      return [];

    default:
      return state;
  }
};

export default coinReducer;

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MEMBERS":
      if (!action.payload) {
        return state;
      }
      return { ...state, members: action.payload };
    default:
      return state;
  }
};

export default reducer;
// https://github.com/f/react-hooks-todo-app/blob/master/src/index.js

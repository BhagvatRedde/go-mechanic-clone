import USER from "./constant";

const initalState = {
  AllData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case USER.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER.LOAD_SUCCESS:
      return {
        ...state,
        usersData: action.AllData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
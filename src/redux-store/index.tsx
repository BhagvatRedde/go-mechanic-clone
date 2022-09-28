interface IAppState {
  data: any[];
}

const initailState: IAppState = {
  data: [],
};
const Reducer = (state = initailState, action: any) => {
  switch (action.type) {
    case "SAVE":
      const data = action.payload;
      return {
        data: [...state.data, data],
      };

    default:
      return state;
  }
};

export default Reducer;

interface IAppState {
  data: any[];
  // checkout: any[];
  checkout: any[];
}

const initailState: IAppState = {
  data: [],
  checkout: [],
};
const Reducer = (state: IAppState = initailState, action: any): IAppState => {
  switch (action.type) {
    case "SAVE":
      const data = action.payload;
      return {
        ...state,
        data: [...state.data, data],
      };
    case "AddCheckout":
      const data2 = action.payload;
      return {
        ...state,
        checkout: [...state.checkout, data2],
        // checkout: data2,
      };
    case "RemoveService":
      const data3 = action.payload;
      const objWithIdIndex = state.checkout.findIndex(
        (obj) => obj.title === data3
      );
      const newData = state.checkout.splice(objWithIdIndex, 1);
      // const newData = state.checkout.filter(
      //   (event) => event.title !== action.payload
      // );
      console.log(newData);
      return {
        ...state,
        checkout: [...state.checkout, newData[0]],
        // checkout: data2,
      };
    // return {
    //   ...state,
    //   checkout: state.checkout.filter(
    //     (event) => event.title !== action.payload
    //   ),
    // };

    default:
      return state;
  }
};

export default Reducer;

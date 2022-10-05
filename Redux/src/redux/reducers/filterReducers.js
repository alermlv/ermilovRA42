import { FILTER_LIST } from "../actions";

const initialState = {
  content: [],
  value: ""
};

export const filterReducers = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_LIST:
      const { list, value } = action.payload;
      return { 
        ...state, 
        content: list.filter(item =>
          item.name.toLowerCase().includes(value.toLowerCase())  
        ),
        value
      };
    default:
      return state;
  }
}
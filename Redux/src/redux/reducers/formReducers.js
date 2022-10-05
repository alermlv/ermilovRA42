import { CHANGE_FORM, EDIT_ITEM, CLEAR_FORM, DELETE_ITEM } from '../actions';

const initialState = {
  name: "",
  price: ""
};

export const formReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
      case EDIT_ITEM:
        return action.payload;
      case CLEAR_FORM:
      case DELETE_ITEM:
        return initialState;
    default:
      return state;
  };
};
import { nanoid } from "nanoid";
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../actions';

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
  { id: nanoid(), name: "Замена аккумулятора", price: 4000 },
  { id: nanoid(), name: "Замена микрофона", price: 2500 },
];

export const listReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const { name, price } = action.payload;
      const newService = {
        id: nanoid(),
        name,
        price
      };
      return [...state, newService];
    case DELETE_ITEM:
      const { id } = action.payload;
      return state.filter(item => item.id !== id);
    case UPDATE_ITEM:
      const updatedService = { ...action.payload };
      return state.map(item => item.id === updatedService.id ? updatedService : item);
    default:
      return state;
  };
};
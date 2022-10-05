export const CHANGE_FORM = 'CHANGE_FORM';
export const CLEAR_FORM = 'CLEAR_FORM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const FILTER_LIST = 'FILTER_LIST';

export const changeForm = (name, value) => {
  return {
    type: CHANGE_FORM,
    payload: { name, value }
  };
};

export const clearForm = () => {
  return {
    type: CLEAR_FORM,
  };
};

export const editItem = (id, name, price) => {
  return {
    type: EDIT_ITEM,
    payload: { id, name, price }
  };
};

export const addItem = (name, price) => {
  return {
    type: ADD_ITEM,
    payload: { name, price }
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: { id }
  };
};


export const updateItem = (id, name, price) => {
  return {
    type: UPDATE_ITEM,
    payload: { id, name, price }
  };
};

export const filterList = (list, value) => {
  return {
    type: FILTER_LIST,
    payload: { list, value }
  };
};
import {IS_CURRENT_USER, ORDER_LIST} from '../ActionTypes/ActionTypes';

export const fetchCurrentUser = (payload: any) => (dispatch: any) => {
  console.log('current user in action', payload);
  dispatch({
    type: IS_CURRENT_USER,
    payload: payload,
  });
};

export const getOrderList = (payload: any) => (dispatch: any) => {
  console.log('order list in action', payload);
  dispatch({
    type: ORDER_LIST,
    payload: payload,
  });
};

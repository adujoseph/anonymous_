import {
  IS_CURRENT_USER,
  ORDER_LIST,
} from '../../actions/ActionTypes/ActionTypes';

const initialState = {
  isActiveView: false,
  isLoginSuccessful: false,
  error: null,
  user: null,
  ordersList: [],
};

const UserReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case IS_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ORDER_LIST:
      return {
        ...state,
        ordersList: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;

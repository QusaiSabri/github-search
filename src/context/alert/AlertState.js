import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types.js';

//Initial state
const AlertState = props => {
  const initialState = null;

  //dispatch to our reducer
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg: msg,
        type: type
      }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

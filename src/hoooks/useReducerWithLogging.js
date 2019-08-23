import { useReducer, useEffect, useRef } from 'react';
import { isEqual } from 'lodash/fp';

const useReducerWithLogging = (reducer, initialState, ...args) => {
  const prevState = useRef(initialState);
  const [state, dispatch] = useReducer(reducer, initialState, ...args);

  dispatch('test');

  const newDispatch = (action) => {
    console.groupCollapsed('Action Type:', action.type);
    console.log('Action:', action);
    return dispatch(action);
  };

  useEffect(() => {
    if (!isEqual(state, initialState)) {
      console.log('Prev State:', prevState.current);
      console.log('Next State:', state);
      console.groupEnd();
    }
    prevState.current = state;
  }, [state]);

  return [state, newDispatch];
};

export default useReducerWithLogging;

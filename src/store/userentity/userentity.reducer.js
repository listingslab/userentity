import {userentityState} from './userentity.state';

const userentity = (state = { }, action) => {  
  switch(action.type) {

    case 'USERENTITY_UPDATE': {
      return {
        ...state,
        userentityState: {
          ...state.userentityState,
          userentity: action.userentity
        }
      };
    }

    case 'USERENTITY_RESET': {
      return {
        userentityState
      };
    }

    default: {
      return state;
    }
  }
};

export default userentity;

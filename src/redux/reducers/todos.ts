import { TODOTYPE } from "../actions/actionTypes";
import { ADDTODOACTION } from "../actions/actions";

const initialState = {
  allIds: [] as any,
  byIds: {}
};


export type TODOACTION= ADDTODOACTION  ;

export default function(state = initialState, action:TODOACTION) {
  switch (action.type) {
    case TODOTYPE.ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TODOTYPE.TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case TODOTYPE.GET_TODO: {
      const { value } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          value
        }
      };
    }
    default:
      return state;
  }
}

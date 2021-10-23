import { actionTypes } from "./actionTypes";
export interface State {
  authToken: string;
}

const initialState = {
    authToken: ""
  };

  export type Action =
  | { type: actionTypes.Login; authToken: string }
  | { type: actionTypes.Logout };

  const shopReducer = (state = initialState, action: Action) =>{
    console.log("Hit in shopReducer: ", action.type);
    console.log("Hit in shopReducer: ", initialState.authToken);
    switch(action.type)
    {
      case actionTypes.Login:
        return{
          ...state,
          authToken: action.authToken
        };
        case actionTypes.Logout:
          return{
            ...state,
            authToken: ""
          };
          default:
            return state;
    }
  }

export default shopReducer;
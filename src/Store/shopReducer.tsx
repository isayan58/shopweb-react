import { actionTypes } from "./actionTypes";
export interface State {
  authToken: string;
}

const initialState = {
    authToken: "",
    name: ""
  };

  export type Action =
  | { type: actionTypes.Login; authToken: string; name: string }
  | { type: actionTypes.Logout };

  const shopReducer = (state = initialState, action: Action) =>{
    console.log("Hit in shopReducer: ", action.type);
    switch(action.type)
    {
      case actionTypes.Login:
        return{
          ...state,
          authToken: action.authToken,
          name: action.name
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
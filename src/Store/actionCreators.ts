import { actionTypes } from "./actionTypes";

export const login = (authToken: string) => {
  console.log("Hit in actionCreators:", authToken);
    return {
      type: actionTypes.Login,
      payload: authToken
    };
  };

  export const logout = () => {
    return {
      type: actionTypes.Logout
    };
  };
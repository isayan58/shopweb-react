import { actionTypes } from "./actionTypes";

export const login = (authToken: string, namein: string) => {
  console.log("Hit in actionCreators:", namein);
    return {
      type: actionTypes.Login,
      payload: authToken,
      name: namein
    };
  };

  export const logout = () => {
    return {
      type: actionTypes.Logout
    };
  };
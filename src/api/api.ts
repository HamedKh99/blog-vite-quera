import { authInstance } from "./axios"
import { LoginFormData, SignupFormData } from "../types/types";

const api = {
  requestLogin(payload: LoginFormData) {
    return authInstance.post("/login/", payload);
  },

  requestSignup(payload: SignupFormData) {
    return authInstance.post("/register/", payload);
  } 
}

export default api;
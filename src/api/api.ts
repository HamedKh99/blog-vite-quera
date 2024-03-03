import { authInstance, axiosInstance } from "./axios";
import { BioFormData, LoginFormData, SignupFormData } from "../types/types";

const api = {
  requestLogin(payload: LoginFormData) {
    return authInstance.post("/login/", payload);
  },

  requestSignup(payload: SignupFormData) {
    return authInstance.post("/register/", payload);
  },

  requestChangeAvatar(avatar: Blob) {
    const formData = new FormData();
    formData.append("avatar", avatar);

    return axiosInstance.put("/profile/avatar/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  requestChangeBio(payload: BioFormData) {
    return axiosInstance.put("/profile/", payload);
  }
};

export default api;

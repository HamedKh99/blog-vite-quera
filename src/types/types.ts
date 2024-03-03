export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  tokens: {
    refresh: string;
    access: string;
  };
}

export interface SignupFormData {
  username: string,
  email: string,
  password: string,
}

export interface avatarResponse {
  avatar: string;
}
export interface BioFormData {
  bio: string;
}

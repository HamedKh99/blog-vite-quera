import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
});
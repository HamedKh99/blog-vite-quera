import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AuthContext } from "./contexts/auth-context";
import useAuth from "./hooks/useAuth";

function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;

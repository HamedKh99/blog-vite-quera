import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AuthContext } from "./contexts/auth-context";

function App() {
  return (
    <AuthContext.Provider value={{ isAuthenticated: true }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;

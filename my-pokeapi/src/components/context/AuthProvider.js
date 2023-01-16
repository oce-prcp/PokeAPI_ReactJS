// Ce fichier est utilisé pour créer un contexte pour l'authentification
// This file is used to create a context for the authentication
import { createContext, useState } from "react";

// Créer un contexte
// Create a context
const AuthContext = createContext({});

// Créer un provider
// Create a provider
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (

    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(true);

  //Función para cambiar logout
  const logOut = () => {
    setUser(false);
  };

  return (
    <UserContext.Provider value={{ user, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

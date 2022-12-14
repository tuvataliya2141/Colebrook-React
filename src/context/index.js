import { createContext, useContext } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {

  const UserName = localStorage.getItem('user')
  const user_id = localStorage.getItem('user_id')
  
  return (
    <AppContext.Provider value={{ user_id , UserName }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };

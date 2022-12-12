import { createContext, useContext } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {

    const name ="hello"
    const name1 ="hello"
  return (
    <AppContext.Provider value={{ name , name1 }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };

import { createContext, useState } from "react";

export const Context = createContext();
//creating a context

const ContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const updateCount = (action) => {
    setCount((prev) => {
      if (action === "increase") {
        return prev + 1;
      }
      return prev - 1;
    });
  };

  return (
    // need to provide the context and provide value for store
    <Context.Provider value={{ count, updateCount }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

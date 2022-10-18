import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { usePersistedContext, usePersistedReducer } from "./usePersist";
import { OverallContext } from "./context";

export const OverallContextProvider = props => {
  const globalStore = usePersistedContext(useContext(OverallContext), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state"
  );

  return (
    <OverallContext.Provider value={{ state, dispatch }}>
      {props.children}
    </OverallContext.Provider>
  );
};

import { createContext } from "react";

export const initialState = {
  members: [],
};

export const OverallContext = createContext(initialState);

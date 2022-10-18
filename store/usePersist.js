import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const usePersistedContext = async (context, key = "state") => {
  const persistedContext = await AsyncStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
};

export const usePersistedReducer = ([state, dispatch], key = "state") => {
  useEffect(() => {
    async function saveData() {
      AsyncStorage.setItem(key, JSON.stringify(state));
    }
    saveData();
  }, [state]);
  return [state, dispatch];
};

/*
export function usePersistedReducer([state, dispatch], key = "state") {
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
  return [state, dispatch];
}
*/

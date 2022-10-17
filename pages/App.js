import { initialState, themeReducer } from "./utils";
import { ThemeContext } from "./ThemeContext";
import { useReducer } from "react";
import ButtonApp from "../components/buttonApp";

export default function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ButtonApp>Change Theme</ButtonApp>
    </ThemeContext.Provider>
  );
}

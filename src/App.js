import { useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
function App() {
  useEffect(() => {
    document.title = "Przelicznik Walut";
  }, []);
  return <Main />;
}
export default App;

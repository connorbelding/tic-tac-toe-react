import { useState } from "react";
import "./css/meyer-reset.css";
import ModeScreen from "./screens/mode-screen/mode-screen";

function App() {
  const [count, setCount] = useState(0);

  return <ModeScreen />;
}

export default App;

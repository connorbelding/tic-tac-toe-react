import { useState } from "react";
import "./css/meyer-reset.css";
import "./css/index.css";
import { ModeScreen, NameScreen, GameScreen } from "./screens";
import { screens } from "./constants";

function App() {
  const [viewingScreen, setViewingScreen] = useState(screens.mode);

  if (viewingScreen === screens.name) return <NameScreen />;
  if (viewingScreen === screens.game) return <GameScreen />;

  return <ModeScreen />;
}

export default App;

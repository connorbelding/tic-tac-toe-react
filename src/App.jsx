import React, { useState } from "react";
import "./css/meyer-reset.css";
import "./css/index.css";
import { ModeScreen, NameScreen, GameScreen } from "./screens";
import { screens } from "./constants";

function App() {
  const [viewingScreen, setViewingScreen] = useState(screens.mode);
  const [playMode, setPlayMode] = useState(null);
  const [players, setPlayers] = useState(null);

  if (viewingScreen === screens.name)
    return (
      <NameScreen
        setPlayers={setPlayers}
        playMode={playMode}
        setViewingScreen={setViewingScreen}
      />
    );
  if (viewingScreen === screens.game)
    return (
      <GameScreen
        playMode={playMode}
        players={players}
        setViewingScreen={setViewingScreen}
      />
    );

  return (
    <ModeScreen setPlayMode={setPlayMode} setViewingScreen={setViewingScreen} />
  );
}

export default App;

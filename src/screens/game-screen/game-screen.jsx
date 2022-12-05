import { useState } from "react";
import { Board } from "../../components";

export default function GameScreen({ playMode, players, setViewingScreen }) {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  return <Board />;
}

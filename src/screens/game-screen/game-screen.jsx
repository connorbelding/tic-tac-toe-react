import { useState, useEffect } from "react";

export default function GameScreen({ playMode, players, setViewingScreen }) {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  useEffect(() => {
    console.log({ playMode, players });
  }, [playMode, players]);

  return <div>Game screen</div>;
}

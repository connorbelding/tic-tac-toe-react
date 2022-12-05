const modes = {
  solo: "solo",
  multi: "multi",
};

const colors = {
  blue: "rgb(32, 75, 192)",
  black: "rgb(41, 41, 41)",
  grey: "rgba(0, 0, 0, 0.5)",
};

const screens = {
  mode: "mode screen",
  name: "name screen",
  game: "game screen",
};

const marks = {
  x: "x",
  o: "o",
};

const potentialWins = [
  "0,0/0,1/0,2", //top horizontal
  "0,0/1,0/2,0", //left vertical
  "0,0/1,1/2,2", //right down diagonal
  "0,1/1,1/2,1", //middle vertical
  "1,0/1,1/1,2", //middle horizontal
  "2,0/1,1/0,2", //top right diagonal
  "0,2/1,2/2,2", //right vertical
  "2,0/2,1/2,2", //bottom horizontal
];

export { modes, colors, screens, marks, potentialWins };

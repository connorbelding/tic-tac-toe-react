export const modes = {
  solo: "solo",
  multi: "multi",
};

export const colors = {
  blue: "rgb(32, 75, 192)",
  black: "rgb(41, 41, 41)",
  grey: "rgba(0, 0, 0, 0.5)",
  lightGrey: "rgba(0, 0, 0, 0.25)",
  white: "rgb(255, 255, 255)",
  lightBlue: "rgb(77, 112, 219)",
  pink: "rgb(224, 49, 79)",
};

export const screens = {
  mode: "mode screen",
  name: "name screen",
  game: "game screen",
};

export const marks = {
  x: "x",
  o: "o",
};

export const potentialWins = [
  "0,0/0,1/0,2", //top horizontal
  "0,0/1,0/2,0", //left vertical
  "0,0/1,1/2,2", //right down diagonal
  "0,1/1,1/2,1", //middle vertical
  "1,0/1,1/1,2", //middle horizontal
  "2,0/1,1/0,2", //top right diagonal
  "0,2/1,2/2,2", //right vertical
  "2,0/2,1/2,2", //bottom horizontal
];

import React from "react";
import PropTypes from "prop-types";
import { calculateWinner, isGameOver } from "./helper";

const GameStatus = ({ squares, next }) => {
  const getStatus = () => {
    const winner = calculateWinner(squares);
    if (winner) {
      return `Winner: ${winner}`;
    }
    if (isGameOver(squares)) {
      return `Draw`;
    }
    return `Next player: ${next ? "X" : "O"}`;
  };

  return <div>{getStatus()}</div>;
};

GameStatus.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  next: PropTypes.bool.isRequired,
};

export default GameStatus;

import React, { useState } from "react";
import Board from "./board";
import GameStatus from "./gamestatus";
import TravelingButtons from "./travelingbuttons";
import { calculateWinner } from "./helper";

const Game = () => {
  const ini = [{ stepNum: 0, squares: Array(9).fill("") }];
  const [history, setHistory] = useState(ini);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    return currentStep % 2 === 0;
  };

  const handleClick = (i) => {
    const currentIndex = currentStep;
    const newHistory = history.slice(0, currentIndex + 1);
    const currentSquares = newHistory[currentIndex].squares;
    const winner = calculateWinner(currentSquares);
    if (winner || currentSquares[i]) {
      return;
    }
    const newSquares = currentSquares.slice();
    newSquares[i] = next() ? "X" : "O";
    setHistory(
      newHistory.concat([{ stepNum: newHistory.length, squares: newSquares }])
    );
    setCurrentStep(newHistory.length);
  };

  const jumpTo = (move) => {
    setCurrentStep(move);
  };

  const currentSquares = () => {
    return history[currentStep].squares;
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares()} onClick={handleClick} />
      </div>
      <div className="game-info">
        <GameStatus squares={currentSquares()} next={next()} />
        <TravelingButtons history={history} onClick={jumpTo} />
      </div>
    </div>
  );
};
export default Game;

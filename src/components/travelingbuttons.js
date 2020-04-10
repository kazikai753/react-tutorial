import React from "react";
import PropTypes from "prop-types";

const TravelingButtons = ({ history, currentStep, onClick }) => {
  const toColRow = (i) => {
    const col = (i % 3) + 1;
    const row = Math.trunc(i / 3) + 1;
    return [col, row];
  };

  const moveLocation = (step, move) => {
    const [col, row] = toColRow(step.move);
    if (step.move === null) {
      return <span />;
    }
    const disp = <span>{` (${col}, ${row})`}</span>;
    if (currentStep === move) {
      return <b>{disp}</b>;
    }
    return disp;
  };

  const moves = () => {
    return history.map((step, move) => {
      const desc = move ? `Go to move#${move}` : `Go to game start`;
      return (
        <li key={step.stepNum}>
          <button type="button" onClick={() => onClick(move)}>
            {desc}
          </button>
          {moveLocation(step, move)}
        </li>
      );
    });
  };

  return <ol>{moves()}</ol>;
};

TravelingButtons.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      stepNum: PropTypes.number,
      squares: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TravelingButtons;

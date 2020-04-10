import React from "react";
import PropTypes from "prop-types";

const TravelingButtons = ({ history, onClick }) => {
  const moves = () => {
    return history.map((step, move) => {
      const desc = move ? `Go to move#${move}` : `Go to game start`;
      const col = (step.move % 3) + 1;
      const row = Math.trunc(step.move / 3) + 1;
      const moveDesc =
        step.move !== null ? <span>{` (${col}, ${row})`}</span> : <span />;
      return (
        <li key={step.stepNum}>
          <button type="button" onClick={() => onClick(move)}>
            {desc}
          </button>
          {moveDesc}
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
  onClick: PropTypes.func.isRequired,
};

export default TravelingButtons;

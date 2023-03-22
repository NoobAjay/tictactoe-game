import React from 'react';

const History = ({ history }) => {
  return (
    <div>
      <ul>
        {history.map((_, index) => (
          <div key={index}>
            {index === 0 ? `Go to game start` : `Go to move #${index}`}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default History;

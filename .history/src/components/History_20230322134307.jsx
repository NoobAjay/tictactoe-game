import React from 'react';

const History = ({ history }) => {
  return (
    <div>
      <ul>
        {history.map((_, index) => (
          <div key={index}>Move is {index}</div>
        ))}
      </ul>
    </div>
  );
};

export default History;

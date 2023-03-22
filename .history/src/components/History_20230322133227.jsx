import React from 'react';

const History = ({ history }) => {
  return (
    <div>
      <ul>
        {history.map((_, index) => (
          <div key={index}>Hello</div>
        ))}
      </ul>
    </div>
  );
};

export default History;

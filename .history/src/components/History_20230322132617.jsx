import React from 'react';

const History = ({ history }) => {
  return (
    <div>
      <ul>
        {history.map(() => {
          <div></div>;
        })}
      </ul>
    </div>
  );
};

export default History;

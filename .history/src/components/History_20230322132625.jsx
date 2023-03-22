import React from 'react';

const History = ({ history }) => {
  return (
    <div>
      <ul>
        {history.map(() => {
          <div>Hello</div>;
        })}
      </ul>
    </div>
  );
};

export default History;

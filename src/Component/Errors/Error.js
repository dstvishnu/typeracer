import React from 'react';

const ApiKeyError = (props) => {
  return (
    <div className="mb-4 card opacity">
      <div className="card-body">
        <h2 className="text-white text-center">
          {props.errorInfo}
        </h2>
      </div>
    </div>
  );
};

export default ApiKeyError;

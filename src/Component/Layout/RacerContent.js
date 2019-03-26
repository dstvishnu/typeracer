import React from 'react';
const RacerContent = ({ textArray, typedWordsArray, remainingWordsArray }) => {
    return (
      <div id="racerContent">
        {textArray.map((text, index) => {
          return typedWordsArray[index] === text ? (
            <span style={{ color: 'green',fontWeight:'bold' }} key={index}>
              {text + ' '}
            </span>
          ) : (
            <span key={index}>{text + ' '}</span>
          )
        })}
      </div>
    )
  }
  RacerContent.defaultProps = {
    textArray: [],
    typedWordsArray: [],
    remainingWordsArray: []
  }
  export default RacerContent;
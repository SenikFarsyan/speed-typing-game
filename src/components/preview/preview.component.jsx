import React from 'react';

//styles
import './preview.styles.css';

const TextSample = ({ text, userInput }) => {
  const sample = text.split('');
  return (
    <div className='text-sample'>
      {sample.map((s, i) => {
        let color;
        if (i < userInput.length) {
          color = s === userInput[i] ? 'yellow' : 'red';
        }
        return (
          <span key={i} style={{ backgroundColor: color }}>
            {s}
          </span>
        );
      })}
    </div>
  );
};

export default TextSample;

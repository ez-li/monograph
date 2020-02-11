import React from 'react';
import './Preview.css';

function Preview(props) {

  const { feedback, partySize, emojis } = props;

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-feedback">
          {feedback === '' ? 
            <span>Let us know what we did well or could improve...</span>
            : feedback}
        </div>
        <div className="preview-party">
          {partySize} people dined here.
        </div>
        <div className="emoji-tags-holder">          
          {emojis.map((emoji, i) => (
            <button className='emoji-tag'
              key={i}>
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Preview;

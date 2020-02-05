import React from 'react';
import './Preview.css';

function Preview(props) {

  const { feedback, partySize, emoji } = props;

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">

          😍
          {/* Your emoji code goes here */}

        </div>
        <div className="preview-feedback">
          {feedback === '' ? 
            <span>Let us know what we did well or could improve...</span>
            : feedback}
        </div>
        <div className="preview-party">
          {partySize > 0 ? <span>{partySize} people dined here</span> : null}
        </div>
      </div>
    </section>
  );
}

export default Preview;

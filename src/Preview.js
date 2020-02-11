import React from 'react';
import './Preview.css';

function Preview(props) {

  const { feedback, partySize, selectedTags, selectedRating } = props;

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-area">
        <div className="preview-content">
          <div className="preview-rating">
          {selectedRating}
          </div>
          <div className="preview-feedback">
            {feedback === '' ? 
              <div className="preview-sample-feedback">Let us know what we did well or could improve...</div>
              : feedback}
          </div>
        </div>
        <div className="preview-bottomBar">
            <div className="preview-party">
              {partySize} people dined here.
            </div>
            <div className="preview-emoji-tags-holder">          
              {selectedTags.map((emoji, i) => (
                <div className='preview-emoji-tag'
                  key={i}>
                  {emoji}
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}

export default Preview;

import React from 'react';
import './Preview.css';

function Preview(props) {

  const { feedback, partySize, selectedTags, selectedRating, isMobile } = props;
  const newRating = selectedRating.length - 1;

  return (
    <section className={ isMobile ? "preview-mobile" : "preview-desktop"}>
      <div className="preview-label">Preview of your review</div>
      <div className="preview-area">
        <div className={ isMobile ? "preview-content-mobile" : "preview-content-desktop"}>
          <div className="preview-sidebar">
            <div className="preview-rating">
              <div className="preview-emoji">
                {selectedRating.map((emoji,i) => 
                  i === newRating ? <div className="animated bounceIn" key={i}>{emoji}</div> : null
                )}
              </div>
            </div>
            <div className="preview-party">Party of {partySize}</div>
          </div>

          <div className={ isMobile ? "preview-main-mobile" : "preview-main-desktop" }>
            <div className={ isMobile ? "preview-feedback-mobile" : "preview-feedback-desktop" }>
              {feedback === '' ? <div className="preview-sample-feedback">Let us know what we did well or could improve...</div> : feedback}
            </div>
          </div>

        </div>
        <div className="preview-bottomBar">
          <div className="preview-emoji-tags-holder">      
            {selectedTags.length > 0 ? <span style={{color:"rgba(0, 0, 0, 0.75)"}}>#</span> : null }
            {selectedTags.map((emoji, i) => (
              <div className="preview-emoji-tag animated pulse" key={i}>{emoji}</div>))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preview;

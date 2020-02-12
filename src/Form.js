import React, { useState } from 'react';
import './Form.css';

function Form(props) {

  const { selectedTags, selectedRating, addEmoji, updatePreview, feedback, partySize, resetAnimate } = props;
  
  const [{ loadMore, emojiRatings, emojiTags, additionalTags }, setState] = 
    useState({ 
      loadMore: false,
      emojiRatings: ['👍','👌','👎'],
      emojiTags: ['❤️','😎','😮','😥','😡','😶','😋','✨','👏','🌈','🔥','🌶','🎉','🍷','🌿'],
      additionalTags: ['😩','😂','🤔','🤫','🤯','🐓','☕️','💵','🎵','🚽','🍻','🌮','🍕','🐶','📸']
    });

  const setLoadMore = () => {
    setState(prevState => ({
      ...prevState, loadMore: true, emojiTags: emojiTags.concat(additionalTags)
    }))
  }
  
  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea className="form-textarea"
        name="feedback"
        value={feedback}
        rows="4"
        onChange={(e) => {
          updatePreview(e)
        }}
        placeholder="Let us know what we did well or could improve..."
      />

      <label className="form-label">How many in your party?</label>
      <input className="form-input"
        type="number"
        name="partySize"
        value={partySize}
        min="1"
        onChange={updatePreview}
        placeholder="2"
      />

      <label className="form-label">How was your meal?</label>
      <div className="emoji-rating-holder">
        {emojiRatings.map((emoji, i) => (
            <div className="emoji rating-button"
              name="selectedRating"
              key={i}
              value={emoji}
              onClick = {() => {
                resetAnimate({ 'target' : { 'name': 'selectedRating', 'value': emoji } });
              }}
              style={selectedRating === emoji ? 
                {borderRadius: '50%',
                boxShadow: 'inset 0px 0px 0px 1.25px rgba(0, 0, 0, 0.25)',
                background: 'rgba(222, 237, 247, 0.5)'} : 
                {}}>
              <span>{emoji}</span>
            </div>

        ))}
      </div>

      <label className="form-label">Pick up to 3 tags:</label>
      <div className="emoji-tags-holder">
        {emojiTags.map((emoji, i) => 
            <div className="emoji tags-button"
              key={i}
              onClick={() => addEmoji(emoji)}
              style={selectedTags[emoji] ? {background: 'rgba(222, 237, 247, 0.5)'} : {}}>
              <span>{emoji}</span>
            </div>
        )}
        <div className="additional-tags">
          {loadMore ? 
            <div className="emoji-tags-holder"></div> : 
            <div className="load-more" onClick={() => setLoadMore(loadMore, true )}>Load more</div>}
        </div>
      </div>
    </div>
  );

}

export default Form;

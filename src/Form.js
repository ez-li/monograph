import React, { useState } from 'react';
import './Form.css';

function Form(props) {

  const { updatePreview } = props;

  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea className="form-textarea"
        name="feedback"
        rows="4"
        onChange={updatePreview}
        placeholder="Let us know what we did well or could improve..."
      />

      <label className="form-label">How many in your party?</label>
      <input className="form-input"
        type="number"
        name="partySize"
        min="1"
        onChange={updatePreview}
        placeholder="2"
      />

      <label className="form-label">How was your meal?</label>
      <div>

        *** Add Emoji selector ***
        {/* Your Code goes here */}

      </div>
    </div>
  );
}

export default Form;

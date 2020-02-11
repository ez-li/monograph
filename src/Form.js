import React, { useState } from 'react';
import './Form.css';

function Form(props) {
  const { selectedEmojis, addEmoji, updatePreview, feedback, partySize } = props;
  const [{ emojis }, setState] = 
    useState({ emojis: ['👍','❤️','😮','😥','😡','😶','😋','✨','👏','🌈','🔥','🌶','🎉','🍸','🌿'] });

  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea className="form-textarea"
        name="feedback"
        value={feedback}
        rows="4"
        onChange={(e) => updatePreview(e)}
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

      <label className="form-label">How was your meal? (Pick up to 3)</label>
      <div className="emoji-holder">
        {emojis.map((emoji, i) => (
            <button className="emoji-button"
                  key={i}
                  onClick={() => addEmoji(emoji)}
                  style={selectedEmojis[emoji] ? {background: 'rgba(0, 0, 0, 0.1)'} : {}}>
                  <span>{emoji}</span>
            </button>

        ))}
      </div>
    </div>
  );

}

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       feedback: '',
//       partySize: 2,
//       emojis: ['👍','❤️','😮','😥','😡','😶','😋','✨','👏','🌈','🔥','🌶','🎉','🍸','🌿']
//     }
//   }

//   render() {
//     return (
//       <div className="form">
//         <label className="form-label">Your feedback</label>
//         <textarea className="form-textarea"
//           name="feedback"
//           rows="4"
//           onChange={this.props.updatePreview}
//           placeholder="Let us know what we did well or could improve..."
//         />
  
//         <label className="form-label">How many in your party?</label>
//         <input className="form-input"
//           type="number"
//           name="partySize"
//           min="1"
//           onChange={this.props.updatePreview}
//           placeholder="2"
//         />
  
//         <label className="form-label">How was your meal? (Pick up to 3)</label>
//         <div className="emoji-holder">
//           {this.state.emojis.map((emoji, i) => (
//               <button className="emoji-button"
//                     key={i}
//                     onClick={() => this.props.addEmoji(emoji)}
//                     style={this.props.selectedEmojis[emoji] ? {background: 'rgba(0, 0, 0, 0.1)'} : {}}>
//                     <span>{emoji}</span>
//               </button>

//           ))}
//         </div>
//       </div>
//     );
//   }
// }

export default Form;

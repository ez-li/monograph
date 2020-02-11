import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';

function App() {

  const [{ feedback, partySize, rating, selectedEmojis }, setState] = 
    useState({ feedback: '', partySize: 2, rating: '', selectedEmojis: {} });

  const updatePreview = (event) => {
    setState(prevState => ({
      ...prevState, [event.target.name]: event.target.value
    }))
  }

  const addEmoji = (emoji) => {
    if (selectedEmojis[emoji]) {
      setState((prevState) => {
        let selectedEmojis = Object.assign({}, prevState.selectedEmojis);
        delete selectedEmojis[emoji];
        return { selectedEmojis }
      })
    } else if (Object.keys(selectedEmojis).length < 3) {
      setState((prevState) => {
        let selectedEmojis = Object.assign({}, prevState.selectedEmojis);
        selectedEmojis[emoji] = true;
        return { selectedEmojis }
      })
    }
  }

  return (
    <div className="app">
      <Header />
      <main className="app-mobile">
        <section className="app-left">
          <Form selectedEmojis={selectedEmojis} addEmoji={addEmoji} updatePreview={updatePreview} feedback={feedback} partySize={partySize} />
        </section>
        <section className="app-right">
          <Preview feedback={feedback} partySize={partySize} emojis={Object.keys(selectedEmojis)} />
        </section>
      </main>
    </div>
  );

}


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       feedback: '',
//       partySize: 2,
//       selectedEmojis: {}
//     }
//     this.updatePreview = this.updatePreview.bind(this);
//     this.addEmoji = this.addEmoji.bind(this);
//   }

//   updatePreview(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   addEmoji(emoji) {
//     if (this.state.selectedEmojis[emoji]) {
//       this.setState((prevState) => {
//         let selectedEmojis = Object.assign({}, prevState.selectedEmojis);
//         delete selectedEmojis[emoji];
//         return { selectedEmojis }
//       })
//     } else if (Object.keys(this.state.selectedEmojis).length < 3) {
//       this.setState((prevState) => {
//         let selectedEmojis = Object.assign({}, prevState.selectedEmojis);
//         selectedEmojis[emoji] = true;
//         return { selectedEmojis }
//       })
//     }
//   }

//   render() {
//     // let mobileWindow = window.innerWidth < 800 ? true : false;
//     return (
//       <div className="app">
//         <Header />
//         <main className={this.props.mobileWindow ? "app-mobile" : "app-main"}>
//           <section className="app-left">
//             <Form selectedEmojis={this.state.selectedEmojis} addEmoji={this.addEmoji} updatePreview={this.updatePreview} feedback={this.state.feedback} partySize={this.state.partySize} emoji={this.state.emoji} />
//           </section>
//           <section className="app-right">
//             <Preview feedback={this.state.feedback} partySize={this.state.partySize} emojis={Object.keys(this.state.selectedEmojis)} />
//           </section>
//         </main>
//       </div>
//     );
//   }
// }

export default App;

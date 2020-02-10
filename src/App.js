import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
      partySize: 2,
      selectedEmojis: {}
    }
    this.updatePreview = this.updatePreview.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
  }

  updatePreview(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addEmoji(event) {
    const emoji = event.target.innerHTML;
    if (this.state.selectedEmojis[emoji]) {
      delete this.state.selectedEmojis[emoji];
    } else if (Object.keys(this.state.selectedEmojis).length < 3) {
      this.state.selectedEmojis[emoji] = true;
    }
    console.log(this.state.selectedEmojis);
  }

  render() {
    return (
      <div className="app">
        <Header />

        <main className="app-main">
          <section className="app-left">
            <Form selectedEmojis={this.state.selectedEmojis} addEmoji={this.addEmoji} updatePreview={this.updatePreview} feedback={this.state.feedback} partySize={this.state.partySize} emoji={this.state.emoji} />
          </section>
          <section className="app-right">
            <Preview feedback={this.state.feedback} partySize={this.state.partySize} emoji={this.state.emoji} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;

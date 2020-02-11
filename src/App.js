import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';

function App() {

  const [{ feedback, partySize, selectedRating, selectedTags }, setState] = 
    useState({ feedback: '', partySize: 2, selectedRating: '', selectedTags: {}
  });

  const updatePreview = ({ target: { name, value } }) => {
    setState(prevState => ({
      ...prevState, [name]: value
    }))
  }

  const addEmoji = (emoji) => {
    const newEmojis = {...selectedTags};
    delete newEmojis[emoji];
    if (selectedTags[emoji]) {
      setState((prevState) => ({
        ...prevState, selectedTags: {
          ...newEmojis
        }
      }))
    } else if (Object.keys(selectedTags).length < 3) {
      setState((prevState) => ({
        ...prevState, selectedTags: {
          ...selectedTags,
          [emoji]: true
        }
      }))
    }
  }

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <section className="app-left">
          <Form selectedRating={selectedRating} selectedTags={selectedTags} addEmoji={addEmoji} updatePreview={updatePreview} feedback={feedback} partySize={partySize} />
        </section>
        <section className="app-right">
          <Preview selectedRating={selectedRating} feedback={feedback} partySize={partySize} selectedTags={Object.keys(selectedTags)} />
        </section>
      </main>
    </div>
  );

}

export default App;

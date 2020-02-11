import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';

function App() {

  const [{ feedback, partySize, selectedRating, selectedTags , mobileLayout}, setState] = 
    useState({ feedback: '', partySize: 2, selectedRating: '', selectedTags: {}, mobileLayout: false
  });

  const updatePreview = ({ target: { name, value } }) => {
    setState(prevState => ({
      ...prevState, [name]: value
    }))
  }

  const updateLayout = () => {
    if (window.innerWidth < 1000) {
      setState(prevState => ({
        ...prevState, mobileLayout: true
      }))
    }
    if (window.innerWidth >= 1000) {
      setState(prevState => ({
        ...prevState, mobileLayout: false
      }))
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateLayout);

    return () => {
      window.removeEventListener('resize', updateLayout);
    }
  })

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
      <main className={ mobileLayout ? "app-mobile" : "app-main" }> 
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

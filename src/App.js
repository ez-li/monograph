import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';

function App() {

  const [{ feedback, partySize, selectedRating, selectedTags, width }, setState] = 
    useState({ 
      feedback: '', 
      partySize: 2, 
      selectedRating: [], 
      selectedTags: {}, 
      width: window.innerWidth
  });

  const updatePreview = ({ target: { name, value } }) => {
    setState(prevState => ({
      ...prevState, [name]: value
    }))
  }

  const updateLayout = () => {
    setState((prevState) => ({
      ...prevState, width: window.innerWidth
    }))
  }

  const isMobile = width < 900 ? true : false;

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

  const resetAnimate = ({ target: { name, value } }) => {
    const temp = selectedRating;
    temp.push(value);
    setState(prevState => ({
      ...prevState, selectedRating: temp
    }))
  }

  return (
    <div className="app">
      <Header isMobile={isMobile} width={width} />
      <main className={ isMobile ? "app-mobile" : "app-main" }> 
        <section className="app-left">
          <Form selectedRating={selectedRating} selectedTags={selectedTags} addEmoji={addEmoji} updatePreview={updatePreview} feedback={feedback} partySize={partySize} resetAnimate={resetAnimate} />
        </section>
        <section className="app-right">
          <Preview isMobile={isMobile} selectedRating={selectedRating} feedback={feedback} partySize={partySize} selectedTags={Object.keys(selectedTags)} />
        </section>
      </main> 
    </div>
  );

}

export default App;

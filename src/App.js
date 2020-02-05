import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
  
        <main className="app-main">
          <section className="app-left">
            <Form />
          </section>
          <section className="app-right">
            <Preview />
          </section>
        </main>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

function OurText(){
	return <p>This is text</p>
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Learn React
        </p>
        <OurText/>
      </header> */}
      <Header />
      <OurText />
      <Footer />
    </div>
  );
}

export default App;

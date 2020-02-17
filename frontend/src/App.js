import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

function demoAlert(){
  alert('Demo Alert! Click Found!');
}

function OurText(){
	return <p>Filler content</p>
}

function App() {
  return (
    <div className="App">
      <Header
        title='IMDB Sample Project'
      />
      <OurText />
      <Footer 
        trademark='Learned from Udemy'
        author='Raunak'
        myalert={demoAlert}
      />
    </div>
  );
}

export default App;

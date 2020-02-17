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

function ShowMessage(props){
  if(props.toShow){
    return <h2>Message</h2>
  }
  else{
    return <h2>Forbidden</h2>
  }
  
}

function App() {
  return (
    <div className="App">
      <Header
        title='IMDB Sample Project'
      />
      <OurText />
      <ShowMessage toShow={true} />
      <Footer 
        trademark='Learned from Udemy'
        author='Raunak'
        myalert={demoAlert}
      />
    </div>
  );
}

export default App;

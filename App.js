import React from 'react';
import './App.css';
import Card1 from './Card1';
import Card2 from './Card2';

function App() {
  return (
    <div className="App">
      <Card1
        name="smrithi"
        age={19}
        location="Coimbatore"
      />
      <Card2
        name="Kamal Haasan"
        age={68} 
        movies={230}
        Born="Parthasarathy Srinivasan 7 November 1954,Paramakudi, India"
        awards="Padma Shri (1990),
        Padma Bhushan (2014),
        Prix Henri-Langlois French Award (2016),
        Ordre des Arts et des Lettres (Chevalier) (2016)"
        Occupation="Actor,filmmaker,playback singer television presenter politician"
        Politicalparty	="Makkal Needhi Maiam (2018 present)"
      />

         
    </div>
  );
}

export default App;

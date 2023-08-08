import React from 'react';

const Card2 = ({ name,age,movies,awards,Born,Occupation,Politicalparty }) => {

  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + 'actor.jpg'} alt="Profile" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <div>
        <p>Movies: {movies}</p>
        <p>Born: {Born}</p>
        <p>Occupation: {Occupation}</p>
        <p>political party: {Politicalparty}</p>
        <p>Awards: {awards}</p>
      </div>
    </div>
  );
};

export default Card2;
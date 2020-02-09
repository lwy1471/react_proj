import React from 'react';
import propTypes from 'prop-types';


function Theme({name, picture, rating}) {
  return (<div>
    <h3>I like {name}</h3>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name}></img>
  </div>
  );
}
Theme.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number
}


function Someone({fav}) {
  return <h4>I love {fav}. I miss her</h4>
}



const theme = [
  {
    id: 1,
    name: "WINTER IS COMMING LIGIN",
    image: "https://www.developerdrive.com/wp-content/uploads/2019/08/winter-is-coming-light.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "MATERIAL LIGHT",
    image: "https://www.developerdrive.com/wp-content/uploads/2019/08/material-light.jpg",
    rating: 3.8
  },
  {
    id: 3,
    name: "BLULOCO LIGHT",
    image: "https://www.developerdrive.com/wp-content/uploads/2019/08/bluloco-light.jpg",
    rating: 4.1
  },
  {
    id: 4,
    name: "SNAZZY LIGHT",
    image: "https://www.developerdrive.com/wp-content/uploads/2019/08/snazzy-light.jpg",
    rating: 4.0
  },
  {
    id: 5,
    name: "NOCTIS LUX",
    image: "https://www.developerdrive.com/wp-content/uploads/2019/08/noctis-lux.jpg",
    rating: 5.0
  }
];




function renderFood(theme) {
  return <Theme key={theme.id} name={theme.name} picture={theme.image} rating={theme.rating}></Theme>
}


function App() {
  return <div>
    { console.log(theme.map(renderFood)) }
    { theme.map(renderFood) }
    <Someone fav="eunji"/>

    </div>;
} 

export default App;

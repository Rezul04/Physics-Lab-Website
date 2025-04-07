import React from 'react';
import './highlights.css';

const highlightsData = [
  {
    title: 'Card Title 1',
    image: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut nemo ex deleniti, suscipit natus ab modi esse voluptate magni officia ullam accusantium ipsa quae vero voluptatem saepe libero ratione.'
  },
  {
    title: 'Card Title 2',
    image: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut nemo ex deleniti, suscipit natus ab modi esse voluptate magni officia ullam accusantium ipsa quae vero voluptatem saepe libero ratione.'
  },
  {
    title: 'Card Title 3',
    image: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut nemo ex deleniti, suscipit natus ab modi esse voluptate magni officia ullam accusantium ipsa quae vero voluptatem saepe libero ratione.'
  }
];

const Highlights = () => {
  return (
    <div className='homeHighlights'>
      <div className="heading">
        <h1>Our Latest news highlights</h1>
      </div>

      <div className="cardHolder">
        {highlightsData.map((highlight, index) => (
          <div className="myCard" key={index}>
            <div className="cardImage">
              <img src={highlight.image} alt={`card-${index}`} />
            </div>
            <div className="cardTitle">
              <h3>{highlight.title}</h3>
            </div>
            <div className="cardText">
              {highlight.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;

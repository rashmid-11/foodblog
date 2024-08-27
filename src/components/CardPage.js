// CardPage.js
import React from 'react';
import FoodCard from './FoodCard';
import cakeImage from '../img/cake.jpg';
import pastaImage from '../img/pasta.jpg';
import chainiseImage from '../img/chainies.jpg';
import chikenImage from '../img/chiken.jpg';
import fruitsImage from '../img/fruits.jpg';
import fishfryImage from '../img/fishfry.jpg';
import sandwitchImage from '../img/sandwitch.jpg';
import burgurImage from '../img/burgur2.jpg';
import momosImage from '../img/momos.jpg';
import pizaImage from '../img/piza.jpg';
import biryaniImage from '../img/biryani.jpg';

import '../css/cardpage.css';

function CardPage() {
  const cafes = [
    { image: cakeImage, title: 'Delicious Cakes', description: 'Freshly baked cakes with various flavors.' },
    { image: pastaImage, title: 'Pasta Delights', description: 'A variety of pasta dishes made with rich sauces.' },
    { image: chainiseImage, title: 'Chinese Cuisine', description: 'Authentic Chinese dishes including noodles and dumplings.' },
    { image: chikenImage, title: 'Chicken Specials', description: 'Tasty chicken dishes prepared with a unique blend of spices.' },
    { image: fruitsImage, title: 'Fresh Fruits', description: 'A selection of seasonal and exotic fruits.' },
    { image: fishfryImage, title: 'Fish Fry', description: 'Crispy fried fish served with tangy sauces.' },
    { image: sandwitchImage, title: 'Sandwiches', description: 'Variety of sandwiches with fresh ingredients.' },
    { image: burgurImage, title: 'Burgers', description: 'Juicy burgers with a range of toppings and sides.' },
    { image: momosImage, title: 'Momos', description: 'Steamed dumplings filled with a mix of vegetables or meat.' },
    { image: pizaImage, title: 'Pizzas', description: 'Delicious pizzas with a variety of toppings and crusts.' },
    { image: biryaniImage, title: 'Biryani', description: 'Flavorful biryani with aromatic spices and tender meat.' },
    // Add more cafes if needed
  ];

  return (
    <div className="card-container">
     
      {cafes.map((cafe, index) => (
        <FoodCard key={index} {...cafe} />
      ))}
    </div>
  );
}

export default CardPage;

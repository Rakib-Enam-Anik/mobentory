import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo suscipit 
                consequatur natus et, vitae molestiae atque aperiam repellendus
                 laborum iusto aliquid minima? Mollitia sit culpa animi ad dolores alias excepturi!</p>
             <button>{props.button}</button>
        </div>
      
    </div>
  )
}

export default About;

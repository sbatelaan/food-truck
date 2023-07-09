import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutUs app__bg flex__center section__padding' id='about'>
    <div className='app__aboutUs-overlay flex__center'>
      <img src={images.G} alt='G' />
    </div>

    <div className='app__aboutUs-content flex__center'>
      <div className='app__aboutUs-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon' className='spoon_img'/>
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutUs-content_knife flex__center'>
        <img src={images.knife} alt="knife"/>
      </div>
    </div>
  </div>
);

export default AboutUs;

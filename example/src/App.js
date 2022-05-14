import React from 'react';
import './index.css';

import { ScrollEffect } from 'react-scroll-effect'
import 'react-scroll-effect/dist/index.css'

const App = () => {
  return (
    <>
      <section>
        <h1 className='heading_1'>Scroll to see demo ↓</h1>
      </section>

      <section>

        <ScrollEffect offset = {150} duration={1} >
          <h1 className='heading_2'>Heading Area</h1>

          <div className='container'>
            <div className='box'>
              <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className='box'>
            <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className='box'>
            <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
      
          </div>
        </ScrollEffect>

      </section>
      
      <section>

        <ScrollEffect offset = {100} duration={2} animateOut={true}>
        <h1 className='heading_2'>Once Animate</h1>
          <div className='container'>

            <div className='box'>
              <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className='box'>
            <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className='box'>
            <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>

          </div>
        </ScrollEffect>

      </section>
      
      <section>

        <ScrollEffect offset = {200} duration={1} >
          <h1 className='heading_2'>Offset set 200</h1>

          <div className='container'>
            <div className='box'>
              <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className='box'>
            <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className='box'>
            <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>

          </div>
        </ScrollEffect>

      </section>
      
      <section>

        <ScrollEffect offset = {150} duration={3} >
          <h1 className='heading_2'>Animation duration 3 sec</h1>

          <div className='container'>
            <div className='box'>
              <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className='box'>
            <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>
            <div className='box'>
            <h3>Content Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius molestiae perferendis eos provident vitae iste.</p>
            </div>

          </div>
        </ScrollEffect>

      </section>
      
    </>

  )
}

export default App

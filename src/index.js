import React from 'react'
import styles from './styles.module.css'


export const ScrollEffect = (props) => {

  
  const offset = props.offset ? props.offset : 150; 
  const duration = props.duration ? props.duration+"s" : "1s"; 
  const animateOut = props.animateOut ? props.animateOut : false; 

  // unique id for each component use 
  const uniquId = 'scrolAnim_'+ Math.floor(Math.random() * 9999)

  const scrollAction = () => {

     const animElem = document.querySelector(`#${uniquId}`);

      
      const windowHeight = window.innerHeight;
      const elementTop = animElem.getBoundingClientRect().top;

      console.log("uniq iD : "+ uniquId +" <> "+props.offset + " > "  + animateOut + " < "+elementTop + " window height: " + windowHeight)

      if (elementTop < windowHeight - offset) {
        animElem.classList.add(styles.active);
      } else if(animateOut == false) {
        animElem.classList.remove(styles.active);
      }

  }

  document.addEventListener("scroll", scrollAction)

  return (
      <div id={uniquId}
      className={props.className ? props.className + " "+styles.scrollFade : styles.scrollFade} style={{transition: duration}} >
          {props.children}
      </div>
  );
};


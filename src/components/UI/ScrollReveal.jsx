import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children, delay = 0 }) => {
  // Create a reference to the DOM element that will wrap the children
  const elementRef = useRef(null);

  useEffect(() => {
    // This animation runs when the component mounts
    gsap.fromTo(elementRef.current,
      { y: 40, opacity: 0 },        // start: 40px lower and invisible
      {
        y: 0,                       // end: normal position
        opacity: 1,                 // end: fully visible
        duration: 0.8,
        delay: delay,
        scrollTrigger: {
          trigger: elementRef.current,    // watch this element
          start: 'top 85%',              // start when top of element hits 85% of viewport
          toggleActions: 'play none none reverse', // play on scroll down, reverse on scroll up
        },
      }
    );

    // Cleanup: kill all ScrollTriggers when component unmounts to avoid memory leaks
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay]);

  return <div ref={elementRef}>{children}</div>;
};

export default ScrollReveal;
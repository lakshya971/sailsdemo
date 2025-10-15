import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AnimatedCounter = ({ 
  endValue, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = '',
  decimals = 0
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = counterRef.current;
    if (!element || hasAnimated) return;

    // Create ScrollTrigger for the counter
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => {
        if (!hasAnimated) {
          // Animate the number
          gsap.to({ value: 0 }, {
            value: endValue,
            duration: duration,
            ease: 'power2.out',
            onUpdate: function() {
              const currentValue = this.targets()[0].value;
              if (decimals > 0) {
                setCount(parseFloat(currentValue.toFixed(decimals)));
              } else {
                setCount(Math.floor(currentValue));
              }
            },
            onComplete: () => {
              setHasAnimated(true);
            }
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [endValue, duration, decimals, hasAnimated]);

  const formatNumber = (num) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <span ref={counterRef} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default AnimatedCounter;
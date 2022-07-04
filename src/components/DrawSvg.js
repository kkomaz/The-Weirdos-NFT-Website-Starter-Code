import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled, { keyframes } from 'styled-components';
import Vector from '../Icons/Vector';
import { useRef, useLayoutEffect } from 'react';

// 2:00:00

export const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Bounce = keyframes`
  from { transform: translateX(-50%) scale(0.5); }
  to { transform: translateX(-50%) scale(1); }
`;

export const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background-color: ${props => props.theme.text};
  animation: ${Bounce} 0.5s linear infinite alternate;
`;

export default function DrawSvg() {
  const ref = useRef(null)
  const ballRef = useRef(null)


  // Research and learn this
  useLayoutEffect(() => {
    let element  = ref.current;

    let svg = document.getElementsByClassName('svg-path')[0];

    const length = svg.getTotalLength();
    // start positioning of svg drawing
    svg.style.strokeDasharray = length;

    // Hide svg before scrolling starts
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const draw = length * self.progress;

          // also reverse the drawing when scroll goes up
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: self => {
          if (self.isActive) {
            // console.log('scrolling is active');
            ballRef.current.style.display = 'none';
          } else {
            // console.log('scrolling is not active');
            ballRef.current.style.display = 'inline-block';
          }
        }
      }
    });

    return () => {
      if (t1) return t1.kill();
    };
  }, [])

  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
}

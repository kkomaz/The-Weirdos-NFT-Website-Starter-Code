import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import Vector from '../Icons/Vector';
import { useRef, useLayoutEffect } from 'react';

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


export default function DrawSvg() {
  const ref = useRef(null)

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
        }
      }
    })
    return () => {
    },
    []
  })

  gsap.registerPlugin(ScrollTrigger)
  return (
    <VectorContainer ref={ref}>
      <Vector />
    </VectorContainer>
  );
}

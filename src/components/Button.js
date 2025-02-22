import React from 'react';
import styled from 'styled-components';

// 41:30

const Btn = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.text};
  color:  ${props => props.theme.body};
  border: none;
  outline: none;

  font-size: ${props => props.theme.fontsm};
  padding: 0.9rem 2.5rem; // Uses REM for padding
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease; // all implies height and width get transition
  position: relative;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%; 
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;
export default function Button({ text, link }) {
  return (
    <Btn>
      <a href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
      </a>
    </Btn>
  );
}

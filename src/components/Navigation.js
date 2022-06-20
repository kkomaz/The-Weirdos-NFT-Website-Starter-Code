import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const Section = styled.section`
  width: 100vw;
  background-color: ${props => props.theme.body}
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
`;

export default function Navigation() {
  return (
    <Section>
      <Navbar>
        <Logo />
        <h2>Menu</h2>
        <h2>Button</h2>
      </Navbar>
    </Section>
  );
}

import React from 'react'
import {Container, Navbar } from 'react-bootstrap';


function Header(){
  return (
      <Navbar style={{ background: '#256eff', color: 'white', fontSize: '2rem' }}>
        <Container>Invoice Details</Container>
      </Navbar>
  );
};

export default Header;

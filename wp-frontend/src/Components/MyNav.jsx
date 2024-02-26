import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MyNav() {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark" className='mb-5'>
        <Container>
          <Navbar.Brand href="/">JustPosted</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/posts">Posts</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

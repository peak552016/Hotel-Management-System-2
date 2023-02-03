import React from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

// style the components
const Container = styled.div`
  overflow-x: hidden;
`;

const Header = styled.div`
  font-size: 2rem;
  font-weight: 5rem;
  text-align: center;
  display: inline;
`;

const Wrapper = styled.div`
width: 80%;
height: 80%;
margin: 1em auto 0 auto;
`;

const UserInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <p>Profile</p>
        </Header>
        <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">History</Nav.Link>
          </Nav.Item>
          
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Wrapper>
    </Container>
  );
};

export default UserInfo;

import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import firstRoom from "../Assets/singleroom.jpg";
import secondRoom from "../Assets/3.jpeg";
import thirdRoom from "../Assets/4.jpg";

// style the components
const Container = styled.div`
  overflow: auto;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  margin: 1em auto 0 auto;
`;

const Header = styled.div`
  font-size: 2rem;
  font-weight: 5rem;
  text-align: center;
  display: inline;
`;
const CardComponent = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Styles = {
  customImage: {
    width: "100%",
    height: "250px",
  },
};
const Room = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <p>Room Types</p>
        </Header>
        <CardComponent>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={firstRoom}
              style={Styles.customImage}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={secondRoom}
              style={Styles.customImage}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={thirdRoom}
              style={Styles.customImage}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={thirdRoom}
              style={Styles.customImage}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">
                <a class="reservation" href="./reservation">
                  Book Now
                </a>
              </Button>
            </Card.Body>
          </Card>
        </CardComponent>
      </Wrapper>
    </Container>
  );
};

export default Room;

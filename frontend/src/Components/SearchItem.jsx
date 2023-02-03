import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import firstRoom from "../Assets/singleroom.jpg";
import RoomCard from "../Components/RoomCard";
// style the components
const Container = styled.div`
  overflow-x: hidden;
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
const Text = styled.div`
  margin-top: 30px;
`;

const DateInfo = styled.div`
  margin-top: 30px;
`;

const SearchItem = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Text>Reserve</Text>
        </Header>
        <DateInfo>
          <Row>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Check-in date</Form.Label>
                  <Form.Control type="date" placeholder="Check-in date" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              {" "}
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Check-out date</Form.Label>
                  <Form.Control type="date" placeholder="Check-out date" />
                </Form.Group>
              </Form>
            </Col>
            <Button>
              <b>SEARCH</b>
            </Button>{" "}
          </Row>
        </DateInfo>

        <RoomCard />
      </Wrapper>
    </Container>
  );
};

export default SearchItem;

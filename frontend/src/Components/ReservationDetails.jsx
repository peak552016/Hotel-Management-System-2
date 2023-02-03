import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoomCard from "../Components/RoomCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// style the components
const Container = styled.div`
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  margin: 2rem auto 2rem auto;
`;

const Header = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  display: inline;
`;

const Text = styled.div`
  margin-top: 30px;
`;
const PromotionDetails = styled.div`
  width: 80%;
  height: 80%;
  margin: 2rem auto 2rem auto;
`;
const RoomDetails = styled.div`
  margin: 2rem auto 2rem auto;
`;
const UserDetails = styled.div`
  margin: 2rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 22px;
`;
const UserID = styled.div``;
const MemberType = styled.div``;
const MemberPoint = styled.div``;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 2;
  margin-left: 20rem;
  margin-top: 2rem;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 2;
  margin-left: 20rem;
  margin-top: 2rem;
`;
const CheckIn = styled.h5``;
const CheckOut = styled.h5``;
const RoomPrice = styled.h5``;
const UsedDiscount = styled.h5``;
const UsedPoint = styled.h5``;
const Total = styled.h4`
  color: #0071c2;
  font-weight: bold;
`;
const SummaryDetails = styled.div`

  display: flex;
`;

const ReservationDetails = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Text>RESERVE STANDARD ROOM</Text>
        </Header>
        <UserDetails>
          <UserID>
            <b>UserID: </b> 2
          </UserID>
          <MemberType>
            <b>Member Type:</b> Platinum
          </MemberType>
          <MemberPoint>
            <b>Member Point:</b> 3000
          </MemberPoint>
        </UserDetails>
        <Row>
          <RoomDetails>
            <RoomCard />
          </RoomDetails>
          <hr />
        </Row>
        <Row>
          <Header>
            <Text>PROMOTION</Text>
          </Header>
          <PromotionDetails>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="discount">
                    <Form.Label>Discount Code: </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Discount Code"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="point">
                    <Form.Label>Use Point for discount: </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="10 points = 1 Baht"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </PromotionDetails>
          <hr />
          <Header>
            <Text>SUMMARY</Text>
          </Header>
          <SummaryDetails>
            <Title>
              <h5>
                <b>Check-in time:</b>{" "}
              </h5>
              <h5>
                <b>Check-out time:</b>{" "}
              </h5>
              <h5>
                <b>Get Discount(Baht):</b>{" "}
              </h5>
              <h5>
                <b>Used Points:</b>{" "}
              </h5>
              <h5>
                <b>Room Price:</b>{" "}
              </h5>
              <h4 style={{ color: "#0071c2" }}>
                <b>Total:</b>{" "}
              </h4>
            </Title>
            <Details>
              <CheckIn>2023-01-10</CheckIn>
              <CheckOut>2023-01-10</CheckOut>
              <RoomPrice>59500</RoomPrice>
              <UsedDiscount>12</UsedDiscount>
              <UsedPoint>21</UsedPoint>
              <Total>59500</Total>
            </Details>
            
          </SummaryDetails>
          <Button style = {{margin: "2rem auto 2rem auto"}}>Reserve</Button>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default ReservationDetails;

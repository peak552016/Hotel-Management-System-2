import React from "react";
import styled from "styled-components";
import video from "../Assets/video.mp4";
import videoBg from "../Assets/videoBg.mp4";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

// style the components
const Container = styled.section`
  width: 100%;
  position: relative;
  height: 80vh;
`;

const BackgoundVideo = styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0000006f;
  top: 0;
  bottom: 0;
  z-index: 1;
  mix-blend-mode: hard-light;
`;
const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  color: white;
  margin-left: 10rem;
  z-index: 100;
`;
const TextContent = styled.div``;

const CardContent = styled.div`
  display: flex;
  position: relative;
  padding: 2rem 1rem;
  background: white;
  border-radius: 5px;
  gap: 1rem;
  margin-right: 10rem;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  bottom: -35%;
  box-shadow: 0 2px 8px 4px hsla(198.92857142857144, 100%, 32.94117647058823%, 0.249);
`;
const CheckOutDate = styled.div``;
const CheckInDate = styled.div``;
const Label = styled.div`
  color: black;
  margin-bottom: 10px;
`;

const SmallText = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
`;
const Header = styled.div`
  font-size: 6rem;
`;

const Slider = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <Overlay></Overlay>
      <BackgoundVideo src={videoBg} autoPlay loop muted />
      <Content>
        <TextContent>
          <Header>
            <b>VENESSA</b>
          </Header>
          <SmallText>Ocean or garden view - Choose for yourself!</SmallText>
        </TextContent>

        {/* <CardContent>
          <CheckInDate>
            <Label>Select your checkin date: </Label>
            <Form.Group controlId="checkin">
              <Form.Control
                type="date"
                name="checkin"
                placeholder="Check-in date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </CheckInDate>
          <CheckOutDate>
            <Label>Select your checkin date: </Label>
            <Form.Group className="mb-3" controlId="checkin">
              <Form.Control
                type="date"
                name="checkin"
                placeholder="Check-in date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </CheckOutDate>
          <Button variant="light">Search</Button>
        </CardContent> */}
      </Content>
    </Container>
  );
};

export default Slider;

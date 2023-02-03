import React from "react";
import styled from "styled-components";
import firstRoom from "../Assets/singleroom.jpg";
import Button from "react-bootstrap/Button";
// style the components
const Container = styled.div`
  overflow-x: hidden;
`;
const SearchResult = styled.div`
  margin-top: 30px;
  border: 2px solid hsl(199, 100%, 33%);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h5`
  font-weight: bold;
`;
const Image = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 2;
`;
const Title = styled.h4`
  font-size: 30px;
  color: #0071c2;
  font-weight: bold;
`;
const Capacity = styled.h5``;
const Available = styled.h5`
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 10px;
  border-radius: 5px;
`;
const Price = styled.h3``;
const Rating = styled.div``;
const Tax = styled.div`
  font-size: 20px;
  color: gray;
`;
const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DetailsTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const RoomCard = () => {
  return (
    <Container>
      <SearchResult>
        <Image src={firstRoom} />
        <Desc>
          <Title>Single Room</Title>
          <Subtitle>1 single bed and free breakfast</Subtitle>
          <Capacity>Maximum: 1 person</Capacity>
          <Available>Room Available: 2 Room</Available>
        </Desc>
        <Details></Details>
        <DetailsTexts>
          <Price>Room Price: 2,500 Baht/night</Price>{" "}
          <Rating>
            <Button>8.9</Button>
          </Rating>
          <Tax>Includes taxes and fees</Tax>
          <Button variant="primary">
                <a class="roomreservation" href="./roomreservation">
                  BOOK THIS ROOM
                </a>
              </Button>
        </DetailsTexts>
      </SearchResult>
    </Container>
  );
};

export default RoomCard;

import React from "react";
import styled from "styled-components";
import NavbarComponent from "../Components/NavbarComponent";
import ReservationDetails from "../Components/ReservationDetails";

// style the components
const Container = styled.div`
  overflow-x: hidden;
`;



const RoomReservation = () => {
  return (
    <Container>
      <NavbarComponent />
      <ReservationDetails/>
    </Container>
  );
};

export default RoomReservation;

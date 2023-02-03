import React from "react";
import styled from "styled-components";
import NavbarComponent from "../Components/NavbarComponent";
import SearchItem from "../Components/SearchItem";

// style the components
const Container = styled.div`
  overflow-x: hidden;
`;

const Reservation = () => {
  return (
    <Container>
      <NavbarComponent/>
      <SearchItem/>
    </Container>
  );
};

export default Reservation;

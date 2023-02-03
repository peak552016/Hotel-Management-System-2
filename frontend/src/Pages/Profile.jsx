import React from "react";
import styled from "styled-components";
import NavbarComponent from "../Components/NavbarComponent";
import UserInfo from "../Components/UserInfo";
// style the components
const Container = styled.div`
  overflow-x: hidden;
`;
const Profile = () => {
  return (
    <Container>
      <NavbarComponent />
      <UserInfo/>
    </Container>
  );
};

export default Profile;

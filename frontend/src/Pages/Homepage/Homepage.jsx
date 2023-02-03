import NavbarComponent from "../../Components/NavbarComponent";
import Room from "../../Components/Room";
import Slider from "../../Components/Slider";
import styled from "styled-components";

// style the components
const Container = styled.div`
  overflow-x: hidden;
`;

const Homepage = () => {
  return (
    <Container>
      <NavbarComponent />
      <Slider />
      <Room/>
    </Container>
  );
};

export default Homepage;

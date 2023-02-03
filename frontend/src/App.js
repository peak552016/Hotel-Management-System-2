import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../src/Pages/Homepage/Homepage.jsx";
import Reservation from "../src/Pages/Reservation.jsx";
import RoomReservation from "../src/Pages/RoomReservation.jsx";
import Profile from "../src/Pages/Profile.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/roomreservation" element={<RoomReservation />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

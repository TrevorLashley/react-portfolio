import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import styled from "styled-components";
import About from "./About.js";
const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <MainContent>
        <Home></Home>
        <About></About>
      </MainContent>

      {/* <Route path="/" element={<Home></Home>}> */}
      {/* </Route> */}
      {/* <Route path="/users" element={<Users users={users}></Users>}></Route> */}
      {/* <Route path="/user/:name" element={<User users={users}></User>}></Route> */}
    </div>
  );
};

export default App;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 100px 5% 0 5%;

`;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import styled from "styled-components";
import About from "./About.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import { useRef } from "react";
const App = () => {
const homeRef = useRef(null)
const aboutRef = useRef(null)
const projectsRef = useRef(null)
const contactRef = useRef(null)
  return (
    <div>
      <NavBar aboutRef={aboutRef} homeRef={homeRef} projectsRef={projectsRef} contactRef={contactRef}></NavBar>
      <MainContent>
        <Home ref={homeRef}></Home>
        <About ref={aboutRef}></About>
        <Projects ref={projectsRef}></Projects>
        <Contact ref={contactRef}></Contact>
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
  gap: 150px;

`;

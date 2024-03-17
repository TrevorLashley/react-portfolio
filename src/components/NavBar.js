import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavBar = (props) => {
  return (
    <StyledNav>
      <div>
        <StyledNavButton onClick={
() => props.homeRef.current.scrollIntoView()}className="StyledNavButton" to="/">
          Home
        </StyledNavButton>
        <StyledNavButton onClick={
() => props.aboutRef.current.scrollIntoView()}className="StyledNavButton" to="/users">
         About
        </StyledNavButton>
        <StyledNavButton onClick={
() => props.projectsRef.current.scrollIntoView()}className="StyledNavButton" to="/">
          Projects
        </StyledNavButton>
        <StyledNavButton onClick={
() => props.contactRef.current.scrollIntoView()}className="StyledNavButton" to="/users">
         Contact me!
        </StyledNavButton>

      </div>
    </StyledNav>
  );
};

export default NavBar;

const StyledNav = styled.nav`

width: 100%;
padding: 10px;
position: fixed;
top: 0px;
left: 0px;
right: 0px;
z-index: 10;


`

const StyledNavButton = styled.button`

   margin-left: 20px;
   text-decoration: none;
   font-size: 1.2em;
   font-weight: bold;
   background-color: transparent;
   color: inherit;
   border-style: none;
   &:hover{color: gray}
  
`;
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledNav>
      <div>
        <StyledNavButton className="StyledNavButton" to="/">
          Home
        </StyledNavButton>
        <StyledNavButton className="StyledNavButton" to="/users">
         About
        </StyledNavButton>
        <StyledNavButton className="StyledNavButton" to="/">
          Projects
        </StyledNavButton>
        <StyledNavButton className="StyledNavButton" to="/users">
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
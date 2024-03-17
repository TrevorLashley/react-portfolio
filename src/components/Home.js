import styled from "styled-components";
import Picture from "../assets/reactpic2.jpg";
import { html5 } from "react-icons-kit/fa/html5";
import { Icon } from "react-icons-kit";
import {css3} from 'react-icons-kit/fa/css3'
import {socialJavascript} from 'react-icons-kit/ionicons/socialJavascript'


const Home = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "15px" }}>
        <ProfilePicture src={Picture}></ProfilePicture>

        <div>
          <h1>Concordia Bootcamps Developper</h1>

          <p>
            Hello my name is Trevor Lashley welcome to my React web portfolio
            featuring some of my previous projects.
          </p>
        </div>
      </div>
      <IconsContainer><Icon size={64} icon={html5}></Icon>
           <Icon size={64} icon={css3}></Icon>
           <Icon size={64} icon={socialJavascript}></Icon> 
           
            
            
    </IconsContainer>
    </div>
  );
};

export default Home;

const ProfilePicture = styled.img`
  border-radius: 50%;

  width: 200px;
  height: 200px;
  
`;

const IconsContainer = styled.div`
margin-top: 70px;
text-align: center;

`
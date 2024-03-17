import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import styled from "styled-components";
const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <MainContent><Home></Home></MainContent>
      

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
  margin-top: 100px;
`;

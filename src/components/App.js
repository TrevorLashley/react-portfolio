import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";



const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}> */}
        {/* </Route> */}
        {/* <Route path="/users" element={<Users users={users}></Users>}></Route> */}
        {/* <Route path="/user/:name" element={<User users={users}></User>}></Route> */}
      </Routes>
    </Router>
  );
};

export default App;

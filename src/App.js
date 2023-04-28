import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Students from "./components/Students";
import Teachers from "./components/Teachers";
import { useState } from "react";
function App() {
  const [toggler,setToggler] = useState(true);
  const Toggle = ()=>{
    setToggler(!toggler);
  }
  return (
    <>
    <BrowserRouter>
    <div className="d-flex">
      <div className={toggler?"w-auto d-flex":"d-none"}>
          <Sidebar/>
      </div>
      <div className="col">
      <Navbar Toggle={Toggle}/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/student" element={<><Students/></>}></Route>
        <Route path="/teacher" element={<><Teachers/></>}></Route>
      </Routes>
    </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;

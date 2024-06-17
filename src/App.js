import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Imgslider from './pages/Imgslider'; 



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Imgslider />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

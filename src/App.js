import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Weather from "./routes/weather/Weather";
import Traffic from "./routes/traffic/Traffic";
import Nav from "./routes/Nav";
import Footer from "./routes/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Weather />} />
          <Route path="/traffic" element={<Traffic />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

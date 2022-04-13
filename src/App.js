import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./routes/weather/Weather";
import Footer from "./routes/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <h1
        style={{
          color: "#45FFCA",
          display: "flex",
          alignItems: "center",
          marginTop: "-8px",
        }}
      >
        Welcome To
        <Typography
          color="primary"
          fontWeight={800}
          sx={{ color: "#FFB000", fontSize: "30px", marginLeft: "5px" }}
        >
          ProNote
        </Typography>
      </h1> */}

      {/* <Home /> */}

      {/* <NoteApi />
      <Footer /> */}
    </div>
  );
}

export default App;

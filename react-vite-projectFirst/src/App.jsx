import Header from "./assets/header/Header.jsx";
import SectionFirst from "./assets/sectionFirst/Section1.jsx";
import SectionSecond from "./assets/sectionSecond/SectionSecond.jsx";
import "./index.css";

export default function App() {
  return (
    <div className="mainContainer">
      <Header />
      <SectionFirst />
      <SectionSecond />
    </div>
  );
}

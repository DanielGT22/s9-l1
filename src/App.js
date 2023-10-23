import "./App.css";

import BtnComponent from "./components/btn";
import ImgComponent from "./components/img";

function App() {
  return (
    <div className="App">
      <BtnComponent buttonText="CLICK" />;
      <ImgComponent imageSrc="http://placekitten.com/200/200" />
    </div>
  );
}

export default App;

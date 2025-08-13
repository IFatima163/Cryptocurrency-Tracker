import { useState } from "react";
import "./index.css";
import CryptoTracker from "./components/CryptoTracker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CryptoTracker />
    </>
  );
}

export default App;

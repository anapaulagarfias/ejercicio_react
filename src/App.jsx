// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + Recact</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }
// Para crear otro boton podríamos copiar la linea de botton o podrìamos usar el elemnto foreach
// Los objetos van entre llaves

import "./App.css";
import Astros from "./components/astros/astros";
import Button from "./components/button/button";
import BottomNav from "./components/buttonNav/bottomNav";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import { usestage } from "react";
import MyCard from "./components/about/about";

function App() {
  const btntext = "Login";
  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Astros", href: "/astros" },
  ];
  return (
    <>
      <Navbar links={links} />
      <Routes>
        <Route path="/" element={<Button name={btntext} />} />
        <Route path="/about" element={<MyCard />} />
        <Route path="/astros" element={<Astros />} />
      </Routes>
    </>
  );
}

export default App;

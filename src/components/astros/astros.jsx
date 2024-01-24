import { useState } from "react";
import "./astros.css";
import { useEffect } from "react";
//Realizaremos una peque;a tarjeta de los astros, deberan mostrarse todos
//solo con nombre y estacion en la que se encuentran

const Astro = (props) => {
  return (
    <div className="card flex">
      <p className="card-name">{props.name}</p>
      <p className="card-station">{props.craft}</p>
    </div>
  );
};

const Astros = () => {
  const [astros, setAstros] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("http://api.open-notify.org/astros.json");
        const result = await response.json();
        setAstros(result.people);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div className="cards-container">
      {astros.map((astro, index) => (
        <Astro key={index} {...astro} />
      ))}
    </div>
  );
};

export default Astros;

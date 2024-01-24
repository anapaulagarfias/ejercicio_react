// const Button = (props) => {
//   console.log(props.txt);
//   return <button>{props.txt}</button>;
// };

// export default Button;

// Props significa propiedad. Ayuda a llamar propiedas de otras funciones o variables

import { Link } from "react-router-dom";

const Button = (props) => {
  console.log(props);
  return (
    <Link to={props.href}>
      <button>{props.name}</button>
    </Link>
  );
};

// Si no resibimos nada, se puede colocar:

Button.defaultProps = {
  name: "Hola",
  href: "/",
};

export default Button;

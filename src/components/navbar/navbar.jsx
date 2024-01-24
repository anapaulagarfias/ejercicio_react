import Button from "../button/button.jsx";
import "./nav.css";

//   console.log(props);
//   const linksBtn = props.links.map((link, index) => {
//     <Button txt=link />
//   });

const Navbar = ({ links }) => {
  return (
    <div className="nav-container">
      <div className="navbar">
        {links.map((link) => (
          <Button key={link.id} {...link} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;

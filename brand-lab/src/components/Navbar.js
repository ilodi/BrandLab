import React from 'react';
//
const Navbar = (props) => (
  <header>
  <div>
  <img className="logoHeader" alt="laboratorio lab" src={props.logoBrand} />


  </div>
  <div>
    <ul className="menuBrand">
      <li>
        <a>
          ACERCA DE
        </a>
      </li>
      <li>
        <a>
          EL EQUIPO
        </a>
      </li>
      <li>
        <a>
         SERVICIOS
        </a>
      </li>
      <li>
        <a>
         CONTACTO
        </a>
      </li>
    </ul>
  </div>
</header>
);

///
export default Navbar;
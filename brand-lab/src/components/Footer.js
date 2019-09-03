import React from 'react';


//Icon

import { Icon } from 'react-icons-kit';
import {facebook,instagram,twitter } from 'react-icons-kit/fa/';

//
const Footer = (props) =>(
    <footer>
    <div className="left">
  <div className="imgLogoBox">
  <img className="logoFooter" alt="laboratorio" src={props.logoBrand} />


  </div>
<div className="socialLinks">
  <a className="linkSocial" href="https://www.facebook.com/mktandbrandlab/">

<Icon  className="IconSocial"  size={32} icon={facebook} />
  </a>
  <a className="linkSocial" href="https://twitter.com/mktandbrandlab" >

<Icon  className="IconSocial"  size={32} icon={twitter} />
  </a>

  <a className="linkSocial" href="https://www.instagram.com/mktandbrandlab/?hl=es-la">

<Icon  className="IconSocial"  size={32} icon={instagram} />
  </a>

</div>
    </div>
    <div className="right">

<div className="infofooter">
<div>
<p>
  Di Hola
</p>
</div>
<div>
<ul>
  <li>
    <a href={`mailto:mktandbrandlab@gmail.com `}>
    mktandbrandlab@gmail.com 
    </a>
  </li>
  <li>
    <a href={`phone:4425928678 `}>
    + 442 5928678
    </a>
  </li>
  <li>
    <a href={`phone:4621290564`} >
      + 462 1290564
    </a>
  </li>
  </ul>
</div>

</div>
    </div>
  </footer>
  );



///
export default Footer;
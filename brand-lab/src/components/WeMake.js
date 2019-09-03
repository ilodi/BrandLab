import React from 'react';
//component
import Make from './smallComponents/Make'
//images
const iconA = require('../static/brand/iconA.png');
const iconB = require('../static/brand/iconB.png');
const iconC = require('../static/brand/iconC.png');
const WeMake = (props) => (
  <section className="WeMake">
    <div className="topWeMake">
        <h2>
          ¿Qué hacemos?
        </h2>
        <hr className="hrLine"/>
    </div>
    <div className="bootomWeMake">

<Make icon={iconA} title={'Reinventamos'} text={'Innovamos el concepto  de las agencias de mkt digital'} />
      {/*  */}
      <Make icon={iconB} title={'Número Uno'} text={'Innovamos el concepto de las agencias de mkt digital'} />
      {/*  */}
      <Make icon={iconC} title={'Personalización'} text={'Creemos que para cada marca hay un tratamiento a la medida'} />
      {/*  */}
    </div>
  </section>
);

///
export default WeMake;
import React,{Component} from 'react';
//
export default class About extends Component {

  handleClick = () => {
    console.log('hola');
  }

render(){
  return(
    <div className="about" >
      {/* <img className="backgroundAbout" src={this.props.backAuxAbout} alt="Sobre nosotros" /> */}
      <div className="boxAbout">
        <div className="left">
        <div className="boxAux">
         <img src={this.props.historiaImg} alt="historia" className="historiImg" onClick={this.handleClick} />
         <h2>
         Historia
         </h2>
         </div>
        </div>
        <div className="rigth">

          <div className="boxAux">
          <img src={this.props.visionImg} className="visionImg" alt="Nuestro Porqué" />

    <h2>
      Visión- Nuestro Por qué
    </h2>
</div>



<div className="boxAux">
         <img src={this.props.misionImg} className="misionImg" alt="Nuestro Cómo" />

    <h2>
    Misión- Nuestro Cómo
    </h2>
</div>

        </div>
      </div>
    </div>
  );
}

}
///

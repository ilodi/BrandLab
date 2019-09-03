import React, {Component} from 'react';

//Componentes
import Footer from '../components/Footer'


//Assets
const logoBrand = require('../static/brand/logo.png');

class Index extends Component{
  render(){
    return(
   <>
   <div>
        <h1>
          Hola
        </h1>
      </div>

      <Footer logoBrand={logoBrand}/>
   </>
    );
  }
}

///
export default Index;
import React, {Component} from 'react';

//Componentes
import Header from '../components/Header';
import WeMake from '../components/WeMake';
import Footer from '../components/Footer';


//Assets
const logoBrand = require('../static/brand/logo.png');

class Index extends Component{
  render(){
    return(
   <>
      <Header logoBrand={logoBrand}/>

      <WeMake />
      <Footer logoBrand={logoBrand}/>
   </>
    );
  }
}

///
export default Index;
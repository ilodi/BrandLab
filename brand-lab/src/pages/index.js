import React, {Component} from 'react';

//Componentes
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import WeMake from '../components/WeMake';
import Footer from '../components/Footer';


//Assets
const logoBrand = require('../static/brand/logo.png');
const backgroundImg = require('../static/wallpaper/hero.png');

class Index extends Component{
  render(){
    return(
   <>
   <Navbar logoBrand={logoBrand}/>
      <Header backgroundImg={backgroundImg}
      title={'¿Por qué un laboratorio para tu marca?'}/>

      <WeMake />
      <Footer logoBrand={logoBrand}/>
   </>
    );
  }
}

///
export default Index;
import React, {Component} from 'react';

//Componentes
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import WeMake from '../components/WeMake';
import About from '../components/About';
import Footer from '../components/Footer';


//Assets
const logoBrand = require('../static/brand/logo.png');
const backgroundImg = require('../static/wallpaper/hero.png');
const backAuxAbout = require('../static/wallpaper/about.png');
const historiaImg = require('../static/site/historia.png');
const visionImg = require('../static/site/vision.jpg');
const misionImg = require('../static/site/mision.jpg');
class Index extends Component{
  render(){
    return(
   <>
   <Navbar logoBrand={logoBrand}/>
      <Header backgroundImg={backgroundImg}
      title={'¿Por qué un laboratorio para tu marca?'}/>

      <WeMake />
      <About backAuxAbout={backAuxAbout} historiaImg={historiaImg} visionImg={visionImg} misionImg={misionImg}/>
      <Footer logoBrand={logoBrand}/>
   </>
    );
  }
}

///
export default Index;
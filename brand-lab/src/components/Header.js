import React,{Component} from 'react';
//
export default class Header extends Component {

render(){
  return(
    <div className="hero" >

      <img alt="Que hacemos en branLab" src={this.props.backgroundImg} />
      <div className="containHeroData">
    <div className="boxHeroInfo">
    <div className="uiline" />
      <h1>
        {this.props.title}
      </h1>
      <div>
        <button className="btnPrimary">
         <span>
         Ver Video
         </span>
        </button>
      </div>
    </div>

      </div>
    </div>
  );
}

}
///

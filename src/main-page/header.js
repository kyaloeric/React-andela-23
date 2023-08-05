import { Component } from "react";
import logo from "./GloboLogo.png";


//class component example not recommended
class Header extends Component {
    render() {
        return (
            <header className="row">
                <div className="col-md-5">
                    <img src={logo} className="logo" alt="logo"/>
                </div>

                <div className="col-md-7 mt-5 {this.props.subtitle}"> </div> 
            </header>

        );
        
    }
}
// note subtitle is in braces instead of props, this helps us prevent writin props many times
// we can pass multiple objects to the props object using multiple attributes we want


//const header = ({subtitle}) => (
  //  <header className="row">
    //    <div className="col-md-5">
      //      <img src={logo} className="logo" alt="logo"/>
        //</div>

        //<div className="col-md-7 mt-5 {subtitle}"> </div> 
    //</header>
//);

export default Header;
 
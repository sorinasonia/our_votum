import React from 'react';
import "./MyHeader.css";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import Signup from "./Signup";
import Signin from "./Signin";




// import { render } from '@testing-library/react';

class MyHeader extends React.Component{


constructor(props){
  super(props)
}

  logo() {
    return <div className ="Logo" >
      <h1>Votum</h1>
    </div>
  }

  search() {
    return <div className = "Search" >
      <p> <FiSearch/>  </p>
      <input className = "input" type="text" placeholder = "Search" />
    </div>
  }

  icons() {
    return  <div className = "icons" > 
    <p className = "icon_user" > <FaUser/> <TiArrowSortedDown/> </p>
    <p className = "icon_arrow" > <TiArrowSortedDown/> </p>
    </div>
  }

  render() {
    return(
      <div className = "MyHeader" >
        
       
        <StickyHeader
          // This is the sticky part of the header.
          header={
            <div className="Header_root">
              <this.logo/>
              <this.search/>
              <Signin/>
              <Signup/>
              <p className = "icons" > <FaUser/> <TiArrowSortedDown/> </p>
            
            </div>
          }
        > 
        
        </StickyHeader>

    </div>
    );
  }
}

 export default MyHeader; 
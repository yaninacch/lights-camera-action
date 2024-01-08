import cinema from '../img/cinema.jpg';
import title from '../img/title.png'
import React from "react";

const Header = () => {
    return(
        
      <header className="App-header">
        <img className='cinema' src={cinema} alt='logo'/> 
        <img className='title'  src={title} alt='title'/>
        
      </header>
    )
}

export default Header;
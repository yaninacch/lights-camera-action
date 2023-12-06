import React from "react";



const NavbarMenu = () => {
    return (
        
        
             <div className="nav-menu">
                <button className="home-button">HOME</button>
                
                  <select name="category">
                    <option value="categories">CATEGORIES</option>
                    <option value="terror">TERROR</option>
                    <option value="suspenso">SUSPENSO</option>
                    <option value="th-ps">THRILLER PSICOLÓGICO</option>
    
                  </select>

                  <select>
                    <option value="order">ORDER</option>
                  </select>
            </div>
             
        
      );

}

export default NavbarMenu;
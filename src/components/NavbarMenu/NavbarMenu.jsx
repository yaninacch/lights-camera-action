import React from "react";
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

const NavbarMenu = ({ genres, selectGenre }) => {

  const handleGenreChange = (e) => {
    selectGenre(e.target.value);
  };

  return (
    <div className="nav-menu">
      <Button id="home-button">HOME</Button>
      

      <Form.Select aria-label="Default select example" id="filters" name="category" onChange={handleGenreChange}>
      <option value="categories">FILTER BY GENRE</option>
        {genres.map((genre) => {
          return (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </Form.Select>

      <Form.Select aria-label="Default select example"id="order">
      <option value="order">ORDER BY</option>
      </Form.Select>
      
    </div>
  );
};

export default NavbarMenu;

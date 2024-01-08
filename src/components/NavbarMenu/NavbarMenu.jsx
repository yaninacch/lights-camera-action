import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarMenu = ({ genres, selectGenre, selectOrder }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGenreChange = (e) => {
    selectGenre(e.target.value);
  };

  const handleSortByChange = (e) => {
    selectOrder(e.target.value);
  };

  const goHome = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="nav-menu">
      <Button onClick={goHome} id="home-button">
        HOME
      </Button>

      <Form.Select
        aria-label="filterByGenreSelect"
        id="filters"
        name="category"
        onChange={handleGenreChange}
      >
        <option value="categories">FILTER BY GENRE</option>
        {genres.map((genre) => {
          return (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </Form.Select>

      <Form.Select
        aria-label="orderBySelect"
        id="order"
        onChange={handleSortByChange}
      >
        <option value="order">ORDER BY</option>
        <option value={"popularity.asc"}>Less Popular</option>
        <option value={"popularity.desc"}>More Popular</option>
        <option value={"revenue.asc"}>Less Revenue</option>
        <option value={"revenue.desc"}>More Revenue</option>
      </Form.Select>
    </div>
  );
};

export default NavbarMenu;

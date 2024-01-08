import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react";



describe('Header', () => {
    test('Header must have cinema and title images', () => {
      render(<Header/>);
      const logoCinema = screen.getAllByRole('img')[0];
      const logoTitle = screen.getAllByRole('img')[1];
      expect(logoCinema).toHaveAttribute('src', 'cinema.jpg');
      expect(logoCinema).toHaveAttribute('alt', 'logo');
      
      expect(logoTitle).toHaveAttribute('src', 'title.png');
      expect(logoTitle).toHaveAttribute('alt', 'title');

    });
  });
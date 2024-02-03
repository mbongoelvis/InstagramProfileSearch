import React from 'react'
import { Container } from "./Container";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";

export const Showuser = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Container />
    </div>
  );
}
